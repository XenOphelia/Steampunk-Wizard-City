// priority: 0

// Visit the wiki for more info - https://kubejs.com/

/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.
     const essences = [ // All Ars Nouveau essences
          'ars_elemental:anima_essence',
          'ars_nouveau:abjuration_essence',
          'ars_nouveau:air_essence',
          'ars_nouveau:conjuration_essence',
          'ars_nouveau:earth_essence',
          'ars_nouveau:fire_essence',
          'ars_nouveau:manipulation_essence',
          'ars_nouveau:water_essence'
     ]

     console.log('Hello! The recipe event has fired!')
     essences.forEach(essence => { // Duplicate Essences with Liquid Source
          event.recipes.create.mixing(
               `2x ${essence}`,
               [
                    Fluid.of('starbunclemania:source_fluid', 1000),
                    `${essence}`
               ]
          )
      }) // End of EssenceList
})