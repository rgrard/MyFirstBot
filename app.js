// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 

//Environmental variable no to publish values to GIT
//var appId = process.env.MY_APP_ID,
//var appPassword = process.env.MY_APP_PASSWORD;

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '554e6f88-e090-4cb2-a020-41fbc1535a33', appPassword: 'vuegGTE102([fesMGDV75[?' }); 
var bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Bonjour, je suis consultant3000! \n J'ai été créé pour concevoir des phrases comme un consultant pourrait les formuler afin de ne jamais avoir le syndrome de la page blanche lors d'un audit!");
    
    //session.send("2");
});