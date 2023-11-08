// const Events = require("events")

// const event = new Events()

// event.on("cutting",()=> {
//     console.log("hair cutting is going ")
// })

// event.emit("cutting")

// const events = require('events')

// const event = new events()

// event.on("watching movie", ()=> {  here event.on has 2 parametres 1 event name and second a listener an arrow function
//     console.log("watching movie ")
// })

// event.emit("watching movie")

// const events = require("events")

// const event = new events()

// event.on("watching movie" ,(name,opinion)=> {
//     console.log(`i have completed watching ${name} and its a ${opinion} movie ` )
// })

// event.emit("watching movie","john wick 4","must watch")

// const events = require("events")

// const event = new events()

// event.on("mernstack developer ", (experience,age) => {
//     console.log(`i am a mernstack developer with ${experience} and i am ${age}`)
// })

// event.emit("mernstack developer","1 year" ,"25")

const events = require("events");

const event = new events();

event.on("mernstack developer", (experience, age) => {
  console.log(`I am a MERN stack developer with ${experience} and I am ${age} years old.`);
});

event.emit("mernstack developer", "1 year experiance", "25");
