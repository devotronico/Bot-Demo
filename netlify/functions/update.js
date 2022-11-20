const sendMessage = require("../../src/sendMessage");

exports.handler = async (event) => {
  console.log(`Ricevuto da Telegram`, event.body);

  const chatID = JSON.parse(event.body).message.chat.id;

  if (!chatID) {
    return { statusCode: 500 };
  }
  await sendMessage(chatID, "Inviato a Telegram 2");

  return { statusCode: 200 };
};

// exports.handler = async event => {
//     try {
//       await bot.handleUpdate(JSON.parse(event.body));
//       return { statusCode: 200, body: '' };
//     } catch (e) {
//       console.log(e)
//       return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
//     }

//   }
