ServerEvents.tags('fluid', (event) => {
    event.get('minecraft:water').remove([/blood/, /tallow/, /sugar_water/]);
});
