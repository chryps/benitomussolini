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
    .setAuthor( 'Çok Yaşa İtalya Krallığı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://image.ibb.co/dt6sHf/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['paraşütçüyolla','paraşütçü','paraşütcü','parasütcüyolla','parasutcuyolla','parasutcu'],
  permLevel: 0
};

exports.help = {
  name: 'paraşütcüyolla',
  description: 'Paraşütcü yollar.',
  usage: 'paraşütcüyolla'
};
