# STILL WORK IN PROGRESS

## About

> Free to use and modify but always mention the author [(@leivaa21)](https://github.com/leivaa21)!
>
> This is a template for a discord bot using discordJS and typescript. </br>
>
> The template is build to be scalable and maintainable.
>
> Not implementing testing because there's no mocking library for discord.js (_at the moment at least_)
>
> **Start your discord bot now**! </br>
> Click on the `Use this template` button
>
> Drop a start if you like it! it doesnt requires you anything but its cool to have stars!</br>

## Why using this template

> The real question is, why you should bother and losing time with configs and all of that when you can simply use this and start implementing your bot now!

## What libraries this templates uses

> If you're using this template, you should know that you're also using this libraries, they're all cool libraries, check them out!
>
> ### Utilities
>
> - **Discord.js** as main library of the repository
> - **FS** to work with the filesystem
> - **PM2** to keep the bot always up and restart on errors (Ideally this wont need to happen xd)
>
> ### Keeping it clean
>
> - **Prettier**
> - **EsLint**
>
> > to mantain your code as clean as possible
>
> ### Others
>
> - **Typescript** because types are cool
> - **dotenv** to hide the discord_token, you dont want **anyone** to know your bot token!!

## Setting this up

Make an application on [discord developer portal](https://discord.com/developers/applications).

Then go to your app and go to the "Bot" section.</br>
![appMenuDiscord](https://i.imgur.com/KTBGVSk.png)

Create a new bot for your aplication and set up the bot user.</br>

![BuildABot](https://i.imgur.com/LRPCmzE.png)

Save the bot token and paste it to your `.env` file in the root of your repository with the format: `discord_token=TOKEN HERE`</br>
![BotMenu](https://i.imgur.com/QMS4QCs.png)

Remember to active the intents here!!
![intents](https://i.imgur.com/tHcMozd.png)

Then we have to generate a URL to invite our bot to our server.
Go to the `OAuth2` section, `URL Generator`;</br>

- In the scope section we have to select `bot`
- At permissions select only the permissions that your bot needs to work, (`only select admin if your bot needs all the perms or just if you're too lazy`)

![UrlGenerator](https://i.imgur.com/pz0B074.png)

Then the URL will send us to a site like this where we can invite the bot to our server!</br>
![AddToYourServer](https://i.imgur.com/GjTnrut.png)

Just with this the app will be able to run and start working on your selected server!

## Run it

When everything is setted up, just run `npm install && npm run build && npm start`
And the bot should show up like this in your console:</br>
![cmd](https://i.imgur.com/mb0YM0N.png)

And there you go! now you only has to implements your custom bot commands on `src/service/commands/` and your events in `src/services/events/`, follow the instructions from the readme's in both folders and start coding!
