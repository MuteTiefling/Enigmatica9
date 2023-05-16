ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/shaped/';

    const recipes = [
        {
            output: '8x mekanism:teleporter_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/infused_iron',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'mekanism:teleporter_frame'
        },
        {
            output: 'mekanism:teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'travelanchors:travel_anchor',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:teleporter'
        },
        {
            output: 'mekanism:portable_teleporter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'mekanism:teleportation_core',
                C: 'powah:capacitor_basic_large',
                D: 'supplementaries:crystal_display',
                E: 'occultism:soul_gem'
            },
            id: 'mekanism:portable_teleporter'
        },
        {
            output: 'mekanism:network_reader',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:gems/source',
                B: 'powah:blank_card',
                C: 'powah:capacitor_basic_large'
            },
            id: 'mekanism:network_reader'
        },
        {
            output: 'mekanism:configurator',
            pattern: ['  A', ' B ', 'C  '],
            key: {
                A: '#forge:rods/all_metal',
                B: '#forge:gems/source',
                C: 'powah:capacitor_basic_large'
            },
            id: 'mekanism:configurator'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:plates/obsidian',
                B: 'pneumaticcraft:heat_sink',
                C: '#forge:ingots/fiery',
                D: 'immersiveengineering:furnace_heater',
                E: 'naturesaura:infused_brick'
            },
            id: 'mekanism:resistive_heater'
        },
        {
            output: 'mekanism:chargepad',
            pattern: ['  A', 'BCB', 'DDD'],
            key: {
                A: 'powah:capacitor_basic_large',
                B: 'minecraft:stone_pressure_plate',
                C: '#forge:essences/earth',
                D: 'pneumaticcraft:compressed_stone_slab'
            },
            id: 'mekanism:chargepad'
        },
        {
            output: 'mekanism:chemical_oxidizer',
            pattern: ['CBE', 'ADA', 'FBF'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:essences/air',
                C: 'pneumaticcraft:reinforced_chest',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'mekanism:basic_chemical_tank',
                F: '#forge:plates/obsidian'
            },
            id: 'mekanism:chemical_oxidizer'
        },
        {
            output: 'mekanism:chemical_infuser',
            pattern: ['EBE', 'ACA', 'DED'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:ingots/fiery',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:plates/obsidian',
                E: 'mekanism:basic_chemical_tank'
            },
            id: 'mekanism:chemical_infuser'
        },
        {
            output: 'mekanism:basic_chemical_tank',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'pneumaticcraft:safety_tube_module',
                B: '#forge:plates/osmium',
                C: 'pneumaticcraft:air_canister'
            },
            id: 'mekanism:chemical_tank/basic'
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['EBF', 'ACA', 'DBD'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: 'pneumaticcraft:turbine_rotor',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:plates/obsidian',
                E: 'mekanism:basic_chemical_tank',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'mekanism:rotary_condensentrator'
        },
        {
            output: '2x mekanism:sps_port',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'mekanism:sps_casing',
                B: 'ae2:spatial_pylon',
                C: '#industrialforegoing:machine_frame/supreme',
                D: 'ae2:spatial_anchor'
            },
            id: 'mekanism:sps_port'
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/steel',
                B: '#forge:essences/manipulation',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:ingots/depths',
                F: '#forge:essences/abjuration'
            },
            id: 'mekanism:enrichment_chamber'
        },
        {
            output: 'mekanism:pressurized_reaction_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/steel',
                B: '#forge:essences/earth',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'mekanism:basic_chemical_tank',
                F: 'thermal:fluid_cell_frame'
            },
            id: 'mekanism:pressurized_reaction_chamber'
        },

        // Placeholder recipes

        {
            output: 'mekanism:meka_tool',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:circuits/ultimate',
                B: 'mekanism:configurator',
                C: 'mekanism:hdpe_sheet',
                D: '#forge:alloys/ultimate',
                E: '#forge:pellets/polonium',
                F: 'powah:capacitor_spirited'
            },
            id: 'mekanism:meka_tool'
        },
        {
            output: 'mekanism:robit',
            pattern: [' A ', 'BCB', 'AAA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'powah:capacitor_spirited',
                C: '#forge:alloys/ultimate'
            },
            id: 'mekanism:robit'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
