global.i18n = require('i18n-js')

i18n.defaultLocale = nuclearConfigs.defaultLocale
i18n.locale = nuclearConfigs.locale
i18n.translations = nuclearConfigs.translations
i18n.currentLocale()

global.t = (key, options) => i18n.t(key, options)