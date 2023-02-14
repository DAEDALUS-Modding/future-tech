var newBuildScenario = {


    "/pa/units/land/ft_aa_walker/ft_aa_walker.json": ["ft_land_units", 1, {row: 2, column: 1}],
    "/pa/units/land/ft_assault_walker/ft_assault_walker.json": ["ft_land_units", 1, {row: 2, column: 2}],
    "/pa/units/land/ft_fabricator/ft_fabricator.json": ["ft_land_units", 1, {row: 2, column: 0}],
    "/pa/units/land/ft_standard_tank/ft_standard_tank.json": ["ft_land_units", 1, {row: 2, column: 3}],
    "/pa/units/land/ft_sniper_tank/ft_sniper_tank.json": ["ft_land_units", 1, {row: 2, column: 4}],
    "/pa/units/land/ft_rocket_tank/ft_rocket_tank.json": ["ft_land_units", 1, {row: 1, column: 0}],

    "/pa/units/land/ft_factory/ft_factory.json": ["ft_land", 1, {row: 2, column: 0}],
    "/pa/units/land/ft_grinder_mex/ft_grinder_mex.json": ["ft_land", 1, {row: 2, column: 1}],
    "/pa/units/land/ft_solar_generator/ft_solar_generator.json": ["ft_land", 1, {row: 2, column: 2}],
    

  
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuildScenario);
}