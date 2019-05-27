const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '嗨') {
    msg.reply({embed:{
        title: "嗨~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'yo') {
    msg.reply({embed:{
        title: "yo",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === '安安') {
    msg.reply('安安~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply({embed:{
        title: "hi~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply({embed:{
        title: "Hi~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'HI') {
    msg.reply({embed:{
        title: "HI~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply({embed:{
        title: "hello~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply({embed:{
        title: "Hello~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === 'HELLO') {
    msg.reply({embed:{
        title: "HELLO~",
        description: "如果未訂閱記得訂閱我~ 還有叫你們的朋友訂閱~ 別忘了按鈴鐺~",
        color:0x33FFF1
    }})
  }
});

bot.on('message', msg => {
  if (msg.content === '安') {
    msg.reply('安~');
  }
});

bot.on('message', msg => {
  if (msg.content === '早安') {
    msg.reply('早安~');
  }
});

bot.on('message', msg => {
  if (msg.content === '午安') {
    msg.reply('午安~');
  }
});

bot.on('message', msg => {
  if (msg.content === '晚安') {
    msg.reply('晚安~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun在嗎') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun在嗎?') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun~') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun在') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CHpun在?') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun在嗎') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun在嗎?') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun~') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun在') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Chpun在?') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'C') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === '阿C') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'CH') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === 'pun') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === '管管') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === '管理員') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === '管理員在嗎') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.on('message', msg => {
  if (msg.content === '管理員在嗎?') {
    msg.reply('有事可以直接說喔~');
  }
});

bot.login(config.token);
