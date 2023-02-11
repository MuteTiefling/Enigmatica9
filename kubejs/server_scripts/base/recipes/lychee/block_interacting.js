ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/block_interacting/';

    const recipes = [
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:farmland',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'farmersdelight:rich_soil_farmland' },
                { type: 'damage_item', damage: 25 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/rich_soil_farmland`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:moss_block' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/moss_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'twilightforest:root',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'twilightforest:liveroot_block' },
                { type: 'damage_item', damage: 125 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/liveroot_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_bricks',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_bricks' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_bricks`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_wall' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_stairs' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_stairs' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_slab',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_slab' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_slab`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_wall' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:quartz_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:damaged_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/damaged_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:damaged_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:chipped_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/chipped_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:chipped_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawed_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawed_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:flawed_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 2 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz`
        },
        {
            hide_in_viewer: true,
            item_in: { tag: 'forge:tools/knives' },
            block_in: 'minecraft:pumpkin',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'north' } },
                    contextual: { type: 'direction', direction: 'north' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'south' } },
                    contextual: { type: 'direction', direction: 'south' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'east' } },
                    contextual: { type: 'direction', direction: 'east' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'west' } },
                    contextual: { type: 'direction', direction: 'west' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'north' } },
                    contextual: { type: 'direction', direction: 'up' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'south' } },
                    contextual: { type: 'direction', direction: 'down' }
                },
                { type: 'damage_item', damage: 1 },
                { type: 'add_item_cooldown', s: 1 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.pumpkin.carve block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'drop_item',
                    item: 'minecraft:pumpkin_seeds',
                    count: 4
                }
            ],
            id: `${id_prefix}carved_pumpkin`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});