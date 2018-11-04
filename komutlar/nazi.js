const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + 'Çok Yaşa Nasyonal Sosyalism!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://render.fineartamerica.com/images/rendered/default/poster/8.000/4.000/break/images/artworkimages/medium/1/nazi-flag-color-added-2016-david-lee-guss.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nazi',
  description: 'Nazi bayrağı yollar.',
  usage: 'nazi'
};
