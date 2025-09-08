import dotenv from 'dotenv';
import pino from 'pino';


dotenv.config();


export const cfg = {
port: parseInt(process.env.PORT || '8080', 10),
tz: process.env.TZ || 'America/Maceio',
humanNumber: process.env.HUMAN_WHATS_NUMBER || '+5582988334056',
inactivityMinutes: parseInt(process.env.INACTIVITY_MINUTES || '2', 10),
openaiKey: process.env.OPENAI_API_KEY,
asstWork: process.env.OPENAI_ASSISTANT_WORK,
asstEdu: process.env.OPENAI_ASSISTANT_EDU
};


export const log = pino({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' });


export const KEYWORDS = {
LAB: [/\blab\b/i, /\blabs\b/i],
WORK: [/\bwork\b/i],
EDU: [/\bedu\b/i]
};


export const LAB_TOPICS = {
CURSOS: [/^1$/, /curso/i, /cursos/i],
INSCRICAO: [/^2$/, /inscri[cç][aã]o/i, /inscrever/i],
IDADE: [/^3$/, /idade/i],
LOCAIS: [/^4$/, /local/i, /aulas?/i],
CERTIFICADO: [/^5$/, /certificado/i],
SUPORTE: [/^6$/, /suporte/i, /atendimento humano/i, /humano/i],
OUTROS: [/^7$/, /outros/i]
};
