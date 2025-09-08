import makeWASocket, { fetchLatestBaileysVersion, useMultiFileAuthState } from 'baileys';
import qrcode from 'qrcode-terminal';
import { log } from './config.js';
import { handleIncoming } from './router.js';
import { armInactivityTimer, clearInactivityTimer } from './inactivity.js';


export async function startWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState('./auth'); // persistência local
const { version } = await fetchLatestBaileysVersion();


const sock = makeWASocket({
version,
auth: state,
printQRInTerminal: true
});


sock.ev.on('creds.update', saveCreds);


sock.ev.on('connection.update', (u) => {
const { connection, qr, lastDisconnect } = u;
if (qr) qrcode.generate(qr, { small: true });
log.info({ connection, lastDisconnect }, 'wa-conn');
});


async function sendText(jid, text) {
await sock.sendMessage(jid, { text });
}


sock.ev.on('messages.upsert', async ({ messages }) => {
for (const m of messages || []) {
try {
if (!m.message || m.key.fromMe) continue; // só mensagens recebidas
const jid = m.key.remoteJid;
const senderName = m.pushName || '';
const text = m.message?.conversation
|| m.message?.extendedTextMessage?.text
|| m.message?.imageMessage?.caption
|| '';


// processa
await handleIncoming({ text, senderName, userJid: jid, send: sendText });


// rearma timer de inatividade
clearInactivityTimer(jid);
armInactivityTimer(jid, sendText);
} catch (e) {
log.error({ err: e }, 'Falha no processamento da mensagem');
}
}
});


return sock;
}
