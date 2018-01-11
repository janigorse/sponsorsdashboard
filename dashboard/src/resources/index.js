export function configure(config) {
  //config.globalResources([]);
  config.globalResources(['./value-converters/filter-value-converter', './value-converters/sort-value-converter']);
}
