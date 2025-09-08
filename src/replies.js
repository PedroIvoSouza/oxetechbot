import { cfg } from './config.js';
`🔹 Digite **Work** para conhecer o OxeTech Work (vagas, bolsas e oportunidades de atuação no mercado).\n` +
`🔹 Digite **Edu** para o OxeTech Edu (metodologia OxeTech + Google nas escolas estaduais).\n\n` +
`💡 É só enviar uma das opções acima que eu te ajudo!`
);


export const askMore = () => (
'Posso ajudar com mais alguma coisa? Se quiser reiniciar, digite **Lab**, **Work** ou **Edu**.'
);


export const bye = () => (
'Tudo certo por aqui. Se precisar de algo mais, é só mandar uma nova mensagem. 👋'
);


// ——— LAB ———
export const labIntro = (senderName = '') => (
`👋 Olá, ${senderName || ''}! Seja bem-vindo(a) ao atendimento automático do *OxeTech Lab*, o programa de capacitação tecnológica da SECTI Alagoas!\n\n` +
`Estamos muito felizes em te receber por aqui. 💜\n\n` +
`Me diga como posso te ajudar!\n` +
`Você pode digitar uma das palavras abaixo:\n\n` +
`1️⃣ Cursos disponíveis\n` +
`2️⃣ Como se inscrever\n` +
`3️⃣ Requisitos de idade\n` +
`4️⃣ Locais das aulas\n` +
`5️⃣ Certificado\n` +
`6️⃣ Suporte e atendimento humano\n` +
`7️⃣ Outros assuntos\n\n` +
`💡 Exemplo: digite "curso" ou "certificado" para que eu te responda certinho.`
);


// Conteúdos do Lab — placeholders prontos; ajuste livre
export const labTopics = {
CURSOS: `📚 **Cursos disponíveis (OxeTech Lab)**\n\n` +
`Os cursos variam por município e polo. Consulte o polo mais próximo para ver a grade atualizada.`,


INSCRICAO: `📝 **Como se inscrever**\n\n` +
`Siga o tutorial em vídeo (passo-a-passo): https://files.catbox.moe/g8ifg0.mp4\n` +
`Dica: Tenha seu documento em mãos e preencha todos os campos obrigatórios.`,


IDADE: `🎯 **Requisitos de idade**\n\n` +
`Em geral, a partir de 14–16 anos (conforme o curso/polo). Confirme no seu polo.`,


LOCAIS: `📍 **Locais das aulas**\n\n` +
`As aulas acontecem nos polos municipais do OxeTech. Informe seu município para eu indicar o polo mais próximo.`,


CERTIFICADO: `🎓 **Certificado**\n\n` +
`Certificação emitida pela SECTI/Parceiros conforme carga horária mínima e critérios do curso.`,


SUPORTE: `🧑‍💼 **Suporte e atendimento humano**\n\n` +
`Se preferir falar com atendimento humano, use: ${cfg.humanNumber} (último recurso).`,


OUTROS: `ℹ️ **Outros assuntos (OxeTech Lab)**\n\n` +
`Me conte em uma frase curta o que você precisa, e eu te direciono.`
};


export const fallbackUnknown = `Não reconheci sua mensagem. Digite **Lab**, **Work** ou **Edu** para começar.`;
