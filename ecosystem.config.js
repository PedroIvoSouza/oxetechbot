module.exports = {
apps: [
{
name: 'oxetech-bot',
script: 'src/index.js',
instances: 1,
autorestart: true,
watch: false,
max_memory_restart: '300M',
env: {
NODE_ENV: 'production',
TZ: 'America/Maceio'
}
}
]
}
