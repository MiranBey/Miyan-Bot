const Discord = require('discord.js');
//const ayarlar = require('ayarlar.json');

exports.run = (client,message,args) => {
	const ana = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTimestamp()
	.setTitle(">>Ana Komutlarım<<")
	//.setFooter(`${message.author.usarname}`,message.author.avatarURL)
	.setThumbnail(client.user.avatarURL)
	//.addField("``f!atam``","Atatürk Gifleri")
  .addField("``m!afk``","Afk moduna girersiniz kullanım : ``f!afk sebep``")
 // .addField("``>atatürksözleri``","Atatürk sözleri")
  .addField("``m!bilgi``","Bot hakkında kısa bilgi")
  .addField("``m!canlıdestek``","Canlı destek talebi açarsınız.")
	.addField("``m!ping``","Bot Gecikme süresi.")
	.addField("``m!kullanıcıbilgim``","Yazan kisi hakkında bilgi.")
	.addField("``m!sunucubilgi``","Sunucu hakkında bilgi.")
//	.addField("``>atam``","Atatürk Gifleri")
	.addField("``m!istatistik``","Bot istatistikleri.")
  .addField("``m!instagram``","f!instagram <k.adı>")
	.addField("``m!davet``","Botun davet linki.")
	.addField("``m!kısalt``","Yazılan url yi kısaltma.")
  .addField("``m!şikayet``","Botun kurucusuna şikayetinizi iletir.")
  .addField("``m!öneri``","Botun kurucusuna önerinizi iletir.")
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	return message.channel.send(ana)
console.log(`Ana yardım menüsü ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['anakomutlar'],
	permlevel: 0
};

exports.help = {
	name: 'anakomutlar',
	description: '+anakomutlar',
	usage: 'anakomutlar'
};


