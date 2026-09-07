// Listen to item registry event
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('occultism:zinc_dust').displayName('Zinc Dust').tag('forge:dusts').tag('forge:dusts/zinc').tag('supplementaries:hourglass_dusts')
})