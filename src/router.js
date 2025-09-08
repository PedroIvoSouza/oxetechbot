import { KEYWORDS, LAB_TOPICS } from './config.js';
const msg = (text || '').trim();
const low = msg.toLowerCase();


// fluxo raiz: Lab/Work/Edu
if (matchAny(low, KEYWORDS.LAB)) {
await send(userJid, labIntro(senderName));
return;
}
if (matchAny(low, KEYWORDS.WORK)) {
const intro = 'Você está no **OxeTech Work**. Envie sua dúvida (de preferência curta).';
await send(userJid, intro);
return;
}
if (matchAny(low, KEYWORDS.EDU)) {
const intro = 'Você está no **OxeTech Edu**. Envie sua dúvida (de preferência curta).';
await send(userJid, intro);
return;
}


// subfluxo LAB (1..7 e palavras)
if (
matchAny(low, LAB_TOPICS.CURSOS) ||
matchAny(low, LAB_TOPICS.INSCRICAO) ||
matchAny(low, LAB_TOPICS.IDADE) ||
matchAny(low, LAB_TOPICS.LOCAIS) ||
matchAny(low, LAB_TOPICS.CERTIFICADO) ||
matchAny(low, LAB_TOPICS.SUPORTE) ||
matchAny(low, LAB_TOPICS.OUTROS)
) {
if (matchAny(low, LAB_TOPICS.CURSOS)) return send(userJid, labTopics.CURSOS + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.INSCRICAO)) return send(userJid, labTopics.INSCRICAO + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.IDADE)) return send(userJid, labTopics.IDADE + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.LOCAIS)) return send(userJid, labTopics.LOCAIS + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.CERTIFICADO)) return send(userJid, labTopics.CERTIFICADO + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.SUPORTE)) return send(userJid, labTopics.SUPORTE + '\n\n' + askMore());
if (matchAny(low, LAB_TOPICS.OUTROS)) return send(userJid, labTopics.OUTROS + '\n\n' + askMore());
}


// Work → IA
if (low.includes('work')) {
const ans = await askWork(msg, userJid);
return send(userJid, ans + '\n\n' + askMore());
}


// Edu → IA
if (low.includes('edu')) {
const ans = await askEdu(msg, userJid);
return send(userJid, ans + '\n\n' + askMore());
}


// Se for a primeira mensagem "genérica", devolve boas-vindas
if (['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'menu', 'ajuda'].some(k => low.includes(k))) {
return send(userJid, welcome(senderName));
}


// Último recurso
return send(userJid, fallbackUnknown);
}
