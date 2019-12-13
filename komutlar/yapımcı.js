const Discord = require('discord.js')

exports.run = (client,message,args) => {
	const yapımcı = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTitle(">>Yapımcım<<")
	.addField("Yapımcım","<@393010902867378188>")
  return message.channel.send(yapımcı)
  console.log(`yapımcı komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['yapımcılar','geliştiriciler','yapımcı'],
	permlevel: 0
};

exports.help = {
	name: 'yapımcı'
}