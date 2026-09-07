// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes((event) => {
	event.recipes.occultism.crushing(
		'2x #forge:dusts/zinc',
		'#forge:ores/zinc'
	)
})