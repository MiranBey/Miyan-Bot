const Discord = require('discord.js');
//const ayarlar  require('./ayarlar.json');

exports.run = (client,message,args) => {
	const yagmurum = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>Miran Bot Bilgi.<<")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter("Miran Bilgi.")
	.setThumbnail(client.user.avatarURL)
	.addField("Tüm Komutlarım için","``m!yardım``")
	.addField("Prefixim :","``m!``")
  .addField("Yapılmaya Başlandığı Zaman", "**9.12.2019 Pazartesi**")
	.addField("Pingim:" + client.ping + "ms",">>Botun Linkleri<<")
	.addField("📥Destek Sunucusu","[Destek Sunucusu](https://discord.gg/6Ftyzqv)")
	.addField("Botun Oy Verme Linki","[Oy Ver](https://discordbots.org/bot/578667039531466753/vote)")
	.addField("📤Davet Linkim","[Davet linki](https://discordapp.com/oauth2/authorize?client_id=625732994434334721&scope=bot&permissions=8)")
//	.addField("Pingim:" + client.ping + "ms","")
  return message.channel.send(yagmurum)
console.log(`Bot bilgi komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};


exports.help = {
	name: 'bilgi',
};