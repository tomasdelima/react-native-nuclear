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

const ReactRouterNative = require('react-router-native');
[
  'NativeRouter',
  'Route',
  'Link',
  'Redirect',
].map(i => global[i] = ReactRouterNative[i])


const ReactRouter = require('react-router');
[
  'withRouter',
].map(i => global[i] = ReactRouter[i])

global.DateTimePicker = require('@react-native-community/datetimepicker')
global.parseQueryString = require('query-string').parse
global.stringifyQueryString = require('query-string').stringify
global.Picker = require('@react-native-picker/picker').Picker

global.AntDesign              = require('react-native-vector-icons/AntDesign').default
global.Entypo                 = require('react-native-vector-icons/Entypo').default
global.EvilIcons              = require('react-native-vector-icons/EvilIcons').default
global.Feather                = require('react-native-vector-icons/Feather').default
global.FontAwesome            = require('react-native-vector-icons/FontAwesome').default
global.FontAwesome5           = require('react-native-vector-icons/FontAwesome5').default
global.Fontisto               = require('react-native-vector-icons/Fontisto').default
global.Foundation             = require('react-native-vector-icons/Foundation').default
global.Ionicons               = require('react-native-vector-icons/Ionicons').default
global.MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default
global.MaterialIcons          = require('react-native-vector-icons/MaterialIcons').default
global.Octicons               = require('react-native-vector-icons/Octicons').default
global.SimpleLineIcons        = require('react-native-vector-icons/SimpleLineIcons').default
global.Zocial                 = require('react-native-vector-icons/Zocial').default
