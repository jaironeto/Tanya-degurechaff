module.exports = async function _status(message, User, mentionId, discord) {
  
  if (!(User?.status === 'ativo')) {
    await message.reply('O usuario não solicitou suporte');
    return
  }
  if (User?.guild !== message.guildId) {
    await message.reply('O usuario não solicitou suporte');
    return
  }

  // obs
  const texto = (User?.staff)
    ? `O usuario possui um suporte em andamento com **${await discord.clientUsername(User?.staff)}** na thread <#${User?.replyGuildChannel}>`
    : `**${await discord.clientUsername(User?.user)}** se encontra no aguardo do inicio de seu atendimento.`;

  await message.reply(texto);

}