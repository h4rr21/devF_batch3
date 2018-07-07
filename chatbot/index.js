const express = require('express');

const app = express();
var port = 5000;

// apiai (dialog flow gratis)
const apiai = require('apiai');
const appai = apiai(process.env.TOKEN2);

// Chat FB
const Bot = require('messenger-bot');
const bot = new Bot({
    //facebook.developres config
    token: process.env.TOKEN,
    verify: 'verificameh4r2192',
    app_secret: 'c2640b9a78b1f250ccfc7b8eaf622596'
})

bot.on('error',(error)=>{
    console.log(error);
})

visitorProfile={}

bot.on('message',(payload, reply)=>{
    let text = payload.message.text


bot.getProfile(payload.sender.id, (err, profile) => {
        visitorProfile = profile;
        var inputText = payload.message.text;
        var sessionId = "myfirstsession"

        var requestai = appai.textRequest(inputText, {
            sessionId: sessionId
        });
        
        requestai.on('response', function(responseai) {
            console.log(responseai);
            reply({ text: `hola amiwo ${visitorProfile.first_name} ${responseai.result.fulfillment.speech}`}, (err) => {
                if (err) throw err
          
                console.log(`Echoed back to ${visitorProfile.first_name} ${visitorProfile.last_name}: ${text}`)
              })      
        });
        
        requestai.end();
    })
})


app.use(bot.middleware());

app.get('/',(req, res, next)=>{
    res.send('<h5>Bienvenido al munto del futuro</h5>');
});

app.listen(port, ()=>{
    console.log('Chatbot está usando el puerto: ',port);
});
