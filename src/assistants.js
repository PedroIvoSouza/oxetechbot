import OpenAI from '@openai/openai';
import { cfg, log } from './config.js';


const openai = new OpenAI({ apiKey: cfg.openaiKey });


async function runAssistant(assistantId, userText, userId) {
// Estratégia simples: thread novo por pergunta (stateless). Se quiser persistir threads por usuário, podemos estender.
const thread = await openai.beta.threads.create({ messages: [{ role: 'user', content: userText }] });
const run = await openai.beta.threads.runs.create(thread.id, { assistant_id: assistantId });


// polling simples até concluir
let status = run.status;
let runId = run.id;
for (let i = 0; i < 30; i++) {
const cur = await openai.beta.threads.runs.retrieve(thread.id, runId);
status = cur.status;
if (status === 'completed') break;
if (['failed', 'cancelled', 'expired'].includes(status)) {
log.warn({ status }, 'Assistant run terminou sem sucesso');
return 'Desculpe, não consegui recuperar a resposta agora. Pode tentar novamente?';
}
await new Promise(r => setTimeout(r, 1000));
}
const msgs = await openai.beta.threads.messages.list(thread.id, { limit: 10 });
const last = msgs.data.find(m => m.role === 'assistant');
const textPart = last?.content?.[0]?.text?.value || 'Sem conteúdo retornado.';
return textPart;
}


export async function askWork(userText, userId) {
if (!cfg.asstWork) return 'Assistente do Work não configurado.';
return runAssistant(cfg.asstWork, userText, userId);
}


export async function askEdu(userText, userId) {
if (!cfg.asstEdu) return 'Assistente do Edu não configurado.';
return runAssistant(cfg.asstEdu, userText, userId);
}
