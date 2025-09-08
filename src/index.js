import express from 'express';
import { cfg, log } from './config.js';
import { startWhatsApp } from './whatsapp.js';


const app = express();
app.use(express.json());


app.get('/health', (_req, res) => res.json({ ok: true }));


app.listen(cfg.port, async () => {
log.info({ port: cfg.port }, 'HTTP up');
await startWhatsApp();
});
