const Confax = require('../bot.js')
const defaultTips = require('../defaulttips') 

Confax.registerCommand('tip', 'default', (message, bot) => {
}, ['tips', 'gethelp'], 'Get some tips on a specific topic', '' /* TODO: load all possible tips here*/)

// TODO: add !addtip command (or maybe it should be in a different file)
