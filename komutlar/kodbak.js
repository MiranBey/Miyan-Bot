const Discord = require('discord.js')
const db = require("quick.db")


exports.run = async (client, message, args) => {
    const miran = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`PREMUİM KODLAR`)
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTimestamp()
  .setThumbnail(client.user.avatarURL)
	//.setThumbnail(`${messag}`)
    .addField("💠Kodlar:","``` deneme - deneme - deneme - deneme ```")
    .addField("💠","```Premium Olmak İçin 15 Davet```")
    db.set(`kod_${message.author.id}`, miran)
    message.delete()
    message.author.send(miran)
    message.reply("<a:xD:651831066692288531> Özelden Premium Javascript Kodlarını attım.").then(msg => msg.delete(10000))
 

}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['kodbak'],
	permlevel: 0
};

exports.help = {
	name: 'kodbak'
}