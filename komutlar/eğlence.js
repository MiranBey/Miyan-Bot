const Discord = require('discord.js');

exports.run = (client,message,args) => {
	const yağmurum = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTitle(">>Eğlence Komutlarım<<")
	.setTimestamp()
	.setThumbnail(client.user.avatarURL)
	//.addField("``👑>kral-ol(bakımda)``","Kral olursunuz.")
	.addField("``⛔f!banned``","Dene ve Gör :D ")
	//.addField("``🚬>sigara``","Bot sigara içer.")
	//.addField("``👺>korsan``","Korsanlar her zaman kötü değildir.")
	.addField("``☕f!herkesebendençay``","Koca yüreğinle herkese Çay ısmarlarsın.")
	.addField("``💨f!koş``","Koşmak iyidir zayıflarsın:d")
	.addField("``☕f!çayiç``","Çay içersiniz Afiyet olsun.")
	.addField("``🔨f!çekiç``","Denemelisiniz bence :d")
	.addField("``☕f!çayaşekerat``","Çaya şeker atarsınız Az atında hasta olmayın :D ")
	.addField("``👊f!yumrukat``","Vur yumruğu suratına !!")
	.addField("``🖋f!yaz``","Bota istediğinizi yazdırın.")
	.addField("``☸f!stresçarkı``","Stres Çarkı cevirirsiniz.")
	//.addField("``😘>öp``","Dene bence <3")
	.addField("``👊f!tokat``","Tokat atarsınız.")
	.addField("``😋f!sarıl``","Etiketlediğiniz kisiye sarılırsınız.")
	//.addField("``😂>espiri``","Soğuk yada sıcak espiri işte.")
	.addField("``🥌💷✂f!tkm``","Bot ile taş kağıt makas oynarsınız")
	//.addField("``👨‍❤️‍👨>aşkölçer``","Etiketlediğiniz kişi ile aşkınızı ölçer")
  return message.channel.send(yağmurum)
  console.log(`Eğlence Yardım komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['eğlence'],
	permlevel: 0
};


exports.help = {
	name: 'eğlence',
	description: '',
	usage: ''
};


