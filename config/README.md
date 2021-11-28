# Config

The config of the bot is prepared to be easy to scale
See the interfaces **ConfigInterface** && **ConfigLoader** and the Implementation of
**ConfigJSONLoader**.

If you add a field in config.json, update the configInterface and you're good to go!
You also could implement another ConfigLoader (if you want to save your config in another way),
You only should change the "new ConfigJSONLoader()" to "new ConfigYOURLoader()" in **bot.ts**!
