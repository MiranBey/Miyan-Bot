const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.guild) {
    const dmuyari = new Discord.RichEmbed()
    .setDescription(`:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.`)
    return message.author.send(dmuyari); }  
  
  let user = message.author
  let sebep = args.join(" ")
  
  if (!sebep) return message.channel.send(`Bir sebep yazmalısın.`)
  
  db.set(`afk_${user.id}`, sebep)
  message.member.setNickname(`[AFK]${message.author.username}`),
  message.channel.send(`Artık \`${sebep}\` sebebiyle AFK'sın.`)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}