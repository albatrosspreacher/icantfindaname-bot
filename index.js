const Telegraf = require("telegraf"); // import telegram lib
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN); // get the token from envirenment variable
bot.start(ctx => ctx.reply("Hello! Please use /help for more information.")); // display Welcome text when we start bot
bot.hears("hi", ctx =>
  ctx.reply(
    `Hi ${ctx.from.first_name}! For more information please go to /help :)`
  )
); // listen and handle when user type hi text
bot.help(ctx =>
  ctx.reply(`Hey There!\n
Here are some commands that you can use: \n
/categories – Use this to view the list of categories
`)
);
bot.command("categories", ctx => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Choose from the options listed below!",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Capitalism", callback_data: "Capitalism" }],
          [{ text: "Gender", callback_data: "Gender" }],
          [{ text: "Communism", callback_data: "Communism" }],
          [{ text: "Tech", callback_data: "Tech" }]
        ]
      }
    }
  );
});
bot.catch((err, ctx) => {
  console.log(`error ;-;\n ${err}`);
});
bot.action("Capitalism", ctx => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Here are some references for Capitalism!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Capitalism 101",
              url:
                "https://drive.google.com/file/d/11yRcUups9ihJgyL3BxmWTaQF6qtkvhsg/view?usp=sharing"
            }
          ],
          [
            {
              text: "The ABCs of Socialism",
              url: "https://s3.jacobinmag.com/issues/jacobin-abcs.pdf"
            }
          ],
          [
            {
              text: "The Various Tendencies Under Socialism",
              url: "https://youtu.be/vyl2DeKT-Vs"
            }
          ],
          [
            {
              text: "Are Prisons Obsolete? by Angela Davis",
              url:
                "https://drive.google.com/drive/u/1/folders/1p4VWX_mL7Pa5PaKqVZexmxKuqlX55yDo"
            }
          ],
          [{ text: "Back", callback_data: "Back" }]
        ]
      }
    }
  );
});
bot.action("Gender", ctx => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Here are some references for Gender!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Feminism for the 99%",
              url:
                "https://outraspalavras.net/wp-content/uploads/2019/03/Feminism-for-the-99.pdf"
            }
          ],
          [{ text: "Back", callback_data: "Back" }]
        ]
      }
    }
  );
});
bot.action("Communism", ctx => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Here are some references for Communism!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "The Communist Manifesto",
              url:
                "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/"
            }
          ],
          [{ text: "Back", callback_data: "Back" }]
        ]
      }
    }
  );
});
bot.action("Tech", ctx => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Here are some references for Capitalism!",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Science and Freedom",
              url:
                "https://www.marxists.org/archive/kosambi/exasperating-essays/x01/1952.htm"
            }
          ],
          [{ text: "Anatomy of an AI System", url: "https://anatomyof.ai/" }],
          [
            {
              text: "Don't blame Social Media, Blame Capitalism",
              url:
                "https://jacobinmag.com/2020/09/social-media-platform-capitalism-the-social-dilemma"
            }
          ],
          [{ text: "Back", callback_data: "Back" }]
        ]
      }
    }
  );
});

bot.action("Back", ctx => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "Choose from the options listed below!",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Capitalism", callback_data: "Capitalism" }],
          [{ text: "Gender", callback_data: "Gender" }],
          [{ text: "Communism", callback_data: "Communism" }],
          [{ text: "Tech", callback_data: "Tech" }]
        ]
      }
    }
  );
});
bot.launch(); // start

//Reply with the number that you want readings on: \n1. Capitalism\n2. Gender\n3. Communism\n4. Tech
