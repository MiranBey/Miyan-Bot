const Discord = require('discord.js');//la çıkmayı unutmuşum xd
const db = require('quick.db')
exports.run = (client,message,args) => {
  

	const elif = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`Yardım menüm`)
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTimestamp()
  .setThumbnail(client.user.avatarURL)
	//.setThumbnail(`${messag}`)
	.addField("💠m!anakomutlar","``` Botun Ana komutlarını gösterir.```")
	.addField("🕹m!eğlence","```Botun eğlence komutlarını gösterir.```")
	.addField("🛠m!yetkili","```Botun yetkili komutlarını gösterir.```")
	.addField("🔞m!nsfw-yardım","```Botun nsfw komutlarını 🔞 gösterir.```")
	//.addField(">>💻Bot Bilgileri.💻<<","--------------------")
	.addField(` Botun pingi` + client.ping +  "ms",">>💻Bot Bilgileri.💻<<")
	//.addField(` Bota Oy verme.`,`[**Oy Ver**](https://top.gg/bot/625732994434334721/vote)`)
	.addField("💌Davet","[**📥Davet Linki**](https://discordapp.com/oauth2/authorize?client_id=625732994434334721&scope=bot&permissions=8)")
	.addField("💌Destek Sunucusu","[**📤Destek Sunucum**](https://discord.gg/6Ftyzqv)")
  return message.channel.send(elif);
  console.log(`Yardım menüsü komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['yardım'],
	permlevel: 0
};

exports.help = {
	name: 'yardım',
	description: '',
	usage: ''
}; 