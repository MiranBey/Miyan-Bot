const Discord = require('discord.js');


exports.run = (client,message,args) => {
	const yetkili = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>Yetkili<<")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
  .setFooter(`${message.author.username}`,message.author.avatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
  .setTimestamp()
	.addField("`☯m!temizle`","Belirtilen miktarda mesaji siler.")
	.addField("`☯m!ban`","Belirtilen kullanıcıyı banlar.")
	.addField("`☯m!kick`","Belirtilen kullanıcıyı kickler.")
	.addField("`☯m!unban`","Yasaklanan kullanıcının banını kaldırır.")
	.addField("`☯m!sustur`","Belirtilen kullanıcıya mute atar.")
	.addField("`☯m!oylama`","Oylama yaparsınız.")
	.addField("`☯m!duyuru`","Sunucuda duyuru yapmanızı sağlar.")
	.addField("`☯m!giriş-çıkış-ayarla`","Resimli giriş çıkış belirler.")
	.addField("`☯m!küfür-engel`","Küfür engelleme sistemini açar/kapatır.")
	.addField("`☯m!link-engel`","Link engelleme sistemi.")
  .addField("`☯m!sayaç`","Sayaç sistemi. kullanım :\n ``f!sayaç-ayarla <sayı> #kanal``")
  .addField("`☯m!şayaç`","Sayaç sıfırlama kullanım :\n ``f!sayaç-sıfırla``")
  .addField("`☯m!otorol`","Otorol Komududur kullanım : \n ``f!otorol @roladı #kanal``")
  .addField("`☯m!otorol`","Otorol sıfırlama komudu kullanım : \n ``f!kapatotorol``")
  .addField("``☯m!mod-log``","Log mesajlarınnı gideceği kanalı belirlersiniz. Kullanım : ``f!mod-log #kanal``")
  .addField("``☯m!mod-log sıfırla``","Log mesajlarını sıfırlarsınız.")
  .addField("`☯m!ototag-ayarla`","Sunucuya girenlere verilecek tag'ı ayarlar. Kullanım : ``f!ototag-ayarla <tag>``")
  .addField("`☯m!ototag-kanal`","Ototag sisteminin log mesaj kanalını ayarlar. Kullanım : ``f!ototag-kanal #kanal``")
  .addField("`☯m!isimdeğiştir`","Etiketlediğiniz bir kişinin ismini değişir. Kullanım : ``f!isimdeğiştir <@Falcon>``")
  return message.channel.send(yetkili);
  console.log(`yetkili yardım menüsü komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['yetkili'],
	permlevel: 0
};

exports.help = {
	name: 'yetkili',
	description: '',
	usage: ''
};