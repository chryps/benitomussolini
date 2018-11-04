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
		.setImage(`https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Parteiadler_der_Nationalsozialistische_Deutsche_Arbeiterpartei_%281933%E2%80%931945%29.svg/200px-Parteiadler_der_Nationalsozialistische_Deutsche_Arbeiterpartei_%281933%E2%80%931945%29.svg.png`)
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
  name: 'sembol',
  description: 'Faşist sembolu yollar.',
  usage: 'sembol'
};
