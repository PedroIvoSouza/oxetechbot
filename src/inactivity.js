import { cfg, log } from './config.js';
import { bye } from './replies.js';


const timers = new Map(); // userJid -> timeoutId


export function armInactivityTimer(userJid, sendFn) {
clearInactivityTimer(userJid);
const ms = cfg.inactivityMinutes * 60 * 1000;
const id = setTimeout(async () => {
try {
await sendFn(userJid, bye());
} catch (e) {
log.warn({ err: e }, 'Falha ao enviar mensagem de despedida');
}
}, ms);
timers.set(userJid, id);
}


export function clearInactivityTimer(userJid) {
const id = timers.get(userJid);
if (id) clearTimeout(id);
}
