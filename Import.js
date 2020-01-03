import ReactNative from 'react-native';
[
  'ActivityIndicator',
  'Animated',
  'AsyncStorage',
  'BackHandler',
  'Easing',
  'Image',
  'Image',
  'KeyboardAvoidingView',
  'Modal',
  'NativeModules',
  'NativeModules',
  'PermissionsAndroid',
  'Picker',
  'Platform',
  'ScrollView',
  'StyleSheet',
  'Text',
  'TextInput',
  'TouchableHighlight',
  'TouchableWithoutFeedback',
  'TouchableOpacity',
  'View',
].map(i => global[i] = ReactNative[i])

import ReactNativeRouterNative from 'react-router-native';
[
  'NativeRouter',
  'Route',
  'Link',
  'Redirect',
  'withRouter',
  'withRouter',
].map(i => global[i] = ReactNativeRouterNative[i])

global.DateTimePicker = require('@react-native-community/datetimepicker')
global.parseQueryString = require('query-string').parse
global.stringifyQueryString = require('query-string').stringify

global.AntDesign              = require('react-native-vector-icons/AntDesign').default
global.Entypo                 = require('react-native-vector-icons/Entypo').default
global.EvilIcons              = require('react-native-vector-icons/EvilIcons').default
global.Feather                = require('react-native-vector-icons/Feather').default
global.FontAwesome            = require('react-native-vector-icons/FontAwesome').default
global.FontAwesome5           = require('react-native-vector-icons/FontAwesome5').default
global.Foundation             = require('react-native-vector-icons/Foundation').default
global.Ionicons               = require('react-native-vector-icons/Ionicons').default
global.MaterialIcons          = require('react-native-vector-icons/MaterialIcons').default
global.MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default
global.Octicons               = require('react-native-vector-icons/Octicons').default
global.Zocial                 = require('react-native-vector-icons/Zocial').default
global.SimpleLineIcons        = require('react-native-vector-icons/SimpleLineIcons').default
