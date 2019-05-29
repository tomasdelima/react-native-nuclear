export default class Nuclear {
  constructor (configs) {
    global.nuclearConfigs = {
        defaultWriteStyle: () => {},
        ...configs
    }

    require('./Import')
    require('./Theme')
    require('./Style')
    require('./Flex')
    require('./Write')
    require('./Translations')
    require('./ApiClient')
  }
}