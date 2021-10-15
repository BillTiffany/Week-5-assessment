const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')

app.delete(`/api/affirmation/:id`, ctrl.deleteAffirmation)
app.get('/api/affirmation', ctrl.getAffirmation)
app.post('/api/affirmation', ctrl.createAffirmation)
// app.put('/api/affirmation/:id', ctrl.updateAffirmation)


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
  
});

app.get("/api/affirmations", (req, res) => {
  const affirmations = ["I am inspired by things happening all around me.",
					 "I am grateful for the people I have in my life.",
					 "I grow and improve every day.",
           "I treat myself kindly and with compassion.",
           "I am courageous.",
           "I am capable of standing up for myself.",
           "I approve of myself.",
           "I love myself fully.",
           "I have value.",
           "I am at peace with who I am.",
           "I am allowed to take care of myself.",
           "I am worthy of love.",
           "I am enough.",
           "My needs and wants are important.",
           "​I’m worthy of respect and kindness.",
           "I choose to celebrate my good qualities",
           "I'm doing my best and that is enough",
           "I am good enough.",
           "I am in control of how I live my life. ",
           "I am capable of making my own decisions",
           "My future is bright",
           "I deserve success",
           "I give myself permission to do what is right for me"
  ];

  // choose random affirmation
  let randomIndex = Math.floor(Math.random() * affirmations.length);
  let randomAffirmations = affirmations[randomIndex];

  res.status(200).send(randomAffirmations);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage!",
					 "A faithful friend is a strong defense.",
           "Now is the time to try something new",
           "No one can walk backwards into the future",
           "Now is the time to go ahead and pursue that love interest",
           "Observe all people, but most of all yourself",
           "One can never fill another's shoes, rather he must outgrow the old shoes",
           "One of the first things you should look for in a problem is it's positive side",
           "There is a time for caution, but not for fear",
           "There's no such thing as an ordinary cat",
           "Time is precious, but truth is more precious than time",
           "To the world you may be just one person, but to one person you may be the world",
           "You are busy, but you are happy.",
           "You are interested in higher education, whether material or spiritual."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});




app.listen(4000, () => console.log("Server running on 4000"));
