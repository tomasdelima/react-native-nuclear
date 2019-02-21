export default class Nuclear {
  constructor (configs) {
    global.nuclearConfigs = configs

    require('./Import')
    require('./Theme')
    require('./Style')
    require('./Flex')
    require('./Write')
    require('./ApiClient')
  }
}