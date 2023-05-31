const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const path = require('path');

const app = express();

console.log("weiner butts");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/generate', function (req, res) {
  const result=generate(req.body);
  res.json(result);
})

console.log("weiner butts2");


async function generate(userInput) {
    const prompt = `highest quality, 8k, UHD, illustration, concept art, pokemon style, a ${userInput.weight} ${userInput.type}-type pokemon, ${userInput.egg}-shaped, ${userInput.custom}`
    console.log(prompt);
     const image = await openai.createImage({
        
        prompt,
        n: 1,
        size: "1024x1024",
        user: "jokemon"
      }); 
      return image.data?.choices;
}

console.log("weiner butts3");

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000)

console.log("server started... weiner butts4");



// generate({weight:"small", type:"water", egg:"humanoid",custom:"looking cool"});