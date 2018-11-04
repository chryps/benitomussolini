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
		.setImage(`https://st.depositphotos.com/2735675/4215/i/950/depositphotos_42153899-stock-photo-flag-of-kingdom-of-italy.jpg`)
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
  name: 'italya',
  description: 'İtalya Krallığı bayrağı yollar.',
  usage: 'italya'
};
