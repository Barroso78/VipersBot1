/**
 * O Comando Help envia uma mensagem de ajuda.
 * Contendo as informações dos comandos.
 */

module.exports = {

  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    const embed = {
      color: 0xB1103C,
      title: 'Lista de comandos',
      description: '',
      timestamp: new Date(),
      footer: {
        text: '2021® 𝗩𝗶𝗽𝗲𝗿𝘀 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆'
      },
      fields: []
    }

    let commands = client.commands

    if (message.member === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

    commands.forEach(command => {
      if (command.alias) return
      embed.fields.push({
        name: `**!${command.help.name}**`,
        value: `*Descrição*: ${command.help.description}
        *Categoria*: ${command.help.category}\n`
      })
    })

    message.author.send({
      embed: embed
    })
      .then(() => message.react('⚡'))
      .catch(() => message.reply('Não tenho permissões para te enviar 😥'))
  },

  conf: {},

  help: {
    name: 'help',
    category: 'Ajuda',
    description: 'Mostra todos os comandos disponíveis do bot.',
    usage: 'help'
  }
}
