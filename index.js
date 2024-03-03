const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express');
const os = require('os');
const si = require('systeminformation');
const s = exp();
const keep_alive = require('./keep_alive.js');


const client = new Client({
     checkUpdate: false
});

client.on('ready', async () => {

     if (global.dataweather && global.dataweather.current_weather) {
      global.temp = global.dataWeather.current_weather.temperature;
      global.wind = global.dataWeather.current_weather.windspeed;

     } else {
       global.temp = "30";
       global.wind = "10";
     }

  const cpuInfo = await si.cpu();
  const mem = await si.mem();
  const totalRam = mem.total;
  const usedRam = mem.used;
  const cpuSpeed = cpuInfo.speed;
  const cpuText = (typeof cpuSpeed === 'number') ? `${cpuSpeed.toFixed(1)} GHz` : 'N/A';
  const ramText = (typeof totalRam === 'number' && typeof usedRam === 'number') ? `RAM: ${((usedRam / totalRam) * 100).toFixed(1)}%` : 'N/A';

const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
     const operator = Math.random() < 0.3 ? '+' :  '-';

setInterval(() => {
 const moment = require('moment');
 const created = moment().format('YYYY-MM-DD HH:mm:ss ');
//<------------------------------------------------------------------------------->


 const change = ['https://media.discordapp.net/attachments/1196402606038323210/1196403154208702544/aec925a9c2ac982678675305480400de.gif?ex=65eedf44&is=65dc6a44&hm=5952c4c413789a3d7164ce10521ddb7ba3455b61b5173e4d6a964ed6099f9902&=','https://cdn.discordapp.com/attachments/1158153853481529384/1213728663594467359/76f4d92f9c7e5aa517cf2b3846464992.gif?ex=65f687e7&is=65e412e7&hm=e601cc2731151fddbfaf97cb86111a9cf2afdd7dbb86c6ebddc33b0db98d2ec8&','https://cdn.discordapp.com/attachments/1158153853481529384/1213728918343778304/70941504f37f036c0c016d9541a5b037.gif?ex=65f68824&is=65e41324&hm=4c1ea6df9b3005dfdb373f2bd4fbac1479386d66257a41b7304f074468d444a2&','https://cdn.discordapp.com/attachments/1158153853481529384/1213729318618931200/13bbe0e2dbe59e3fb275d1d87eecc8d4.gif?ex=65f68883&is=65e41383&hm=623ee60bdf9117261ce5c1ab11152f0e52d661f2967399a01aa4261accca3084&']; //

 const poop = ['https://cdn.discordapp.com/attachments/1158153853481529384/1213729471266562079/a9caf6edad30b4f38a0573b21dcdf32d.gif?ex=65f688a7&is=65e413a7&hm=c90cc5c54f286a1bec7d4a22e119ab967d6f549e428bdbaa4b753e7d4f7136d8&','https://cdn.discordapp.com/attachments/1158153853481529384/1213729663478927360/a57ebf5a082595205a53213f496a42c1.gif?ex=65f688d5&is=65e413d5&hm=45afd1ab08e8882a1f3e250071d78e0587534f0f1fe0bdbcca83a8a371ec33ab&','https://cdn.discordapp.com/attachments/1158153853481529384/1213729883872821328/3a9da0c2fde2e93af35cb7ff0be42b4f.gif?ex=65f6890a&is=65e4140a&hm=975aafaf4b83e7a5399b27480c0ea0cf57ca4ee06c141e9117ee417ed42979c9&','https://cdn.discordapp.com/attachments/1158153853481529384/1213730203902279680/0fca90b95d6878f685750bd1ce88a0a5.gif?ex=65f68956&is=65e41456&hm=bb880e7d454e97ef6eddb35c44f80c47e832c8e9c8f64b309abea873ed94b344&']; //

 const change2 = ['กับความรู้สึก','กับความรัก','กับความไม่แน่นอน','กับความว่างเปล่า']; //

 const change3 = ['kxwxsϟ','Roxyzϟ','kxwxsϟ','Roxyzϟ']; //

 const iooi = ['instagram✗','Disocrdヅ','instagram✗','Disocrdヅ']; // 

 const iiio = ['https://www.instagram.com/kxwxs._','https://discord.gg/QsRSb7hPm2','https://www.instagram.com/kxwxs._','https://discord.gg/QsRSb7hPm2']; //

 const yyyt = ['facebook↯','facebook↯','facebook↯','facebook↯']; //

 const ddds = ['https://www.facebook.com/SmokeXX7','https://www.facebook.com/SmokeXX7','https://www.facebook.com/SmokeXX7','https://www.facebook.com/SmokeXX7']; //

 const wwtt = [`💻 ${cpuText} | ${ramText}`,`🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C  | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)}m/s`];
//<------------------------------------------------------------------------------->

  try {
    const tyyy = yyyt[Math.floor(Math.random()*yyyt.length)];
    const sddd = ddds[Math.floor(Math.random()*ddds.length)];
    const oooi = iiio[Math.floor(Math.random()*iiio.length)];
    const ioii = iooi [Math.floor(Math.random()*iooi.length)];
    const popp = poop [Math.floor(Math.random()*poop.length)];
    const ssss = change[Math.floor(Math.random()*change.length)];
    const dwada = change2[Math.floor(Math.random()*change2.length)];
    const ap = change3[Math.floor(Math.random()*change3.length)];
    const wwt = wwtt[Math.floor(Math.random()*wwtt.length)];
    
  const r = new Discord.RichPresence()
     .setApplicationId('1121867777867788309')
     .setType('STREAMING')
     .setURL('https://www.youtube.com/watch?v=l_9euOBx6C4&list=RDl_9euOBx6C4&start_radio=1')
     .setState(`${dwada}`)
     .setName(`YOUTUBE`)
     .setDetails(`${ap} 🕛${getTime()}`)
     .setAssetsSmallImage(`${popp}`)
     .setAssetsLargeImage(`${ssss}`)
     .setAssetsLargeText(`${wwt}`)
    .setAssetsSmallText(`ping : ${Math. round(client.ws.ping)}`)  
    .addButton(`${ioii}`,`${oooi}`)
    .addButton(`${tyyy}`,`${sddd}`)
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now());
    client.user.setActivity(r);
  } catch (err) {
        console.error('Error getting system information:', err.message);
      }
      }, 1 * 500);
      console.log(`${client.user.username} Is Ready!`);
      });
  client.login(auth.token);

  si.currentLoad().then(data => {
      // handle success
    }).catch(err => {
      // handle error
    });

async function getSystemInfo() {
    try {
      const cpuUsage = await si.currentLoad();
      const mem = await si.mem();
      if (cpuUsage && mem) {
        const ramUsage = (mem.active / mem.total) * 100;
        return {
          cpuUsage: cpuUsage.currentload, // This is the real current load in percentage
          ramUsage
        };
      } else {
        throw new Error('Failed to get CPU or memory information');
      }
    } catch (err) {
      console.error('Error getting system information:', err.message);
      return {
        cpuUsage: 0,
        ramUsage: 0
      };
    }
}




let endTime = new Date().setHours(24 + 6, 0, 0, 0), 
  today = new Date().setHours(0, 0, 0, 0),
  dayCount = Math.floor((today - new Date(2024, 0).getTime()) / (24 * 60 * 60 * 1000));

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

function getDate() {
  return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
}

function getTime() {
  return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
}

