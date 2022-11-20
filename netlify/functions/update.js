const axios = require("axios").default;

exports.handler = async (event) => {
  console.log(`Received`, event.body);

  const chatID = JSON.parse(event.body).message.chat.id;

  if (!chatID) {
    return { statusCode: 500 };
  }

  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id: chatID,
    text: "I got your message!"
  });

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
