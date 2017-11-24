var builder = require('botbuilder');


exports.startDialog = function (bot) {

    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/de7c3a94-8e13-493e-9204-f23dc6bd9c5e?subscription-key=ff6167bbc0c640f48dda5060375cfedb&verbose=true&timezoneOffset=0&q= ');

    bot.recognizer(recognizer);

    bot.dialog('WantFood', function (session, args) {
        //if (!isAttachment(session)) {
            // Pulls out the food entity from the session if it exists
            var foodEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'food');

            // Checks if the food entity was found
            if (foodEntity) {
                session.send('Looking for restaurants which sell %s...', foodEntity.entity);
                // Insert logic here later
            } else {
                session.send("No food identified! Please try again");
            }
        }

    ).triggerAction({
        matches: 'WantFood'
    });



    bot.dialog('DeleteFavourite', function (session,args ) {

        session.send('DeleteFavourite food intent');

    }).triggerAction({
        matches: 'DeleteFavourite'

    });


    bot.dialog('GetCalories', function (session, args) {
        //if (!isAttachment(session)) {

            // Pulls out the food entity from the session if it exists
            var foodEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'food');

            // Checks if the for entity was found
            if (foodEntity) {
                session.send('Calculating calories in %s...', foodEntity.entity);
                // Insert logic here later

            } else {
                session.send("No food identified! Please try again");
            }
        }
    ).triggerAction({
        matches: 'GetCalories'
    });

    bot.dialog('GetFavouriteFood', function(session,args) {
       session.send("GetFavouriteFood Intent"); 
    }).triggerAction({
        matches: 'GetFavouriteFood'
    });

    bot.dialog('LookForFavourite', function(session, args){ 
        session.send("LookForFavourite Intent"); 
    }).triggerAction({
        matches: 'LookForFavourite'
    });
    

    bot.dialog('WelcomeIntent', function(session, args) { 
        session.send("Hi Rahul!");
    }).triggerAction({
        matches: 'WelcomeIntent'
    });
}

// Function is called when the user inputs an attachment
function isAttachment(session) { 
    var msg = session.message.text;
    if ((session.message.attachments && session.message.attachments.length > 0) || msg.includes("http")) {
        
        //call custom vision here later
        return true;
    }
    else {
        return false;
    }
}