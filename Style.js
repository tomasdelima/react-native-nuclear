import {Dimensions, StatusBar} from 'react-native'

global.topBarHeight = Platform.OS === 'ios' ? 20 : 0// NativeModules.StatusBarManager.HEIGHT

global.Height = Dimensions.get('window').height
global.Width  = Dimensions.get('window').width
global.rgba = (r, g, b, a) => "rgba("+r+","+g+","+b+","+a+")"

var or = (a, b, c) => (a || a === 0) ? a : (b || b === 0) ? b : c
var bg = (x) => ({backgroundColor: x})
var color = (c) => ({color: c})

global.s = {
  // Positioning
  relative: {position: "relative"},
  absolute: {position: "absolute"},
  fixed:    {position: "fixed"},

  // Display
  block:  {display: "block"},
  inline: {display: "inline-block"},
  hidden: {display: "none"},

  // Flex
  flex:          {flex: 1},
  shrink:        {flex: 0},
  wrap:          {flexWrap: "wrap"},
  row:           {flexDirection: "row"},
  rowReverse:    {flexDirection: "row-reverse"},
  column:        {flexDirection: "column"},
  columnReverse: {flexDirection: "column-reverse"},
  spacedOut:     {justifyContent: "space-around"},
  spacedIn:      {justifyContent: "space-between"},
  center1:       {justifyContent: "center"},
  center2:       {alignItems: "center"},
  centerSelf:    {alignSelf: "center"},
  stretch1:      {justifyContent: "stretch"},
  stretch2:      {alignItems: "stretch"},
  stretch:       {alignItems: "stretch"},
  stretchSelf:   {alignSelf: "stretch"},
  start1:        {justifyContent: "flex-start"},
  start2:        {alignItems: "flex-start"},
  startSelf:     {alignSelf: "flex-start"},
  end1:          {justifyContent: "flex-end"},
  end2:          {alignItems: "flex-end"},
  endSelf:       {alignSelf: "flex-end"},
  grow:          (x) => ({flexGrow: x == true ? 1 : x || 1}),

  // Backgrounds
  bg,
  opaqueBG: (x) => bg(rgba(0, 0, 0, x)),
  transparentBG: bg("transparent"),

  red:     bg(rgba(255, 0, 0, 0.2)),
  blue:    bg(rgba(0, 0, 255, 0.2)),
  green:   bg(rgba(204, 255, 206, 1)),
  yellow:  bg(rgba(255, 255, 0, 0.2)),
  magenta: bg(rgba(255, 0, 255, 0.2)),
  cyan:    bg(rgba(0, 255, 255, 0.2)),
  gray:    bg(rgba(128, 128, 128, 0.2)),

  bg0: bg(theme[0]),
  bg1: bg(theme[1]),
  bg2: bg(theme[2]),
  bg3: bg(theme[3]),
  bg4: bg(theme[4]),
  bg5: bg(theme[5]),
  bg6: bg(theme[6]),
  bg7: bg(theme[7]),
  bg8: bg(theme[8]),
  bg9: bg(theme[9]),

  // Font colors
  color,

  color0: color(theme[0]),
  color1: color(theme[1]),
  color2: color(theme[2]),
  color3: color(theme[3]),
  color4: color(theme[4]),
  color5: color(theme[5]),
  color6: color(theme[6]),
  color7: color(theme[7]),
  color8: color(theme[8]),
  color9: color(theme[9]),

  // Text
  noWrap:       {whiteSpace: "nowrap"},
  wrapWord:     {width: 0, flexGrow: 1},
  noDecoration: {textDecoration: "none"},
  bold:         {fontWeight: "bold"},
  underline:    {textDecorationLine: "underline"},
  italic:       {fontStyle: "italic"},
  justify:      {textAlign: "justify"},
  alignCenter:  {textAlign: "center"},
  alignRight:   {textAlign: "right"},
  alignLeft:    {textAlign: "left"},
  indent:       (x) => ({textIndent: x}),
  size:         (x) => ({fontSize: x}),
  lineHeight:   (x) => ({lineHeight: x}),

  // Dimensioning
  fullscreen: {width: Width, height: Height},
  wide:       (x=1) => ({width:    x <= 1 ? 100*x+"%" : x}),
  minWidth:   (x=1) => ({minWidth: x <= 1 ? 100*x+"%" : x}),
  maxWidth:   (x=1) => ({maxWidth: x <= 1 ? 100*x+"%" : x}),
  minHeight:  (x=1) => ({minHeight: x <= 1 ? 100*x+"%" : x}),
  maxHeight:  (x=1) => ({maxHeight: x <= 1 ? 100*x+"%" : x}),
  high:       (x=1) => ({height:   x <= 1 ? 100*x+"%" : x}),
  rect:       (x) => {x = x || {}; return [s.wide(x.w), s.high(x.h)]},
  top:        (x) => ({top:    x || 0}),
  bottom:     (x) => ({bottom: x || 0}),
  left:       (x) => ({left:   x || 0}),
  right:      (x) => ({right:  x || 0}),
  square:     (x) => ({width: x, height: x}),
  circle:     (x) => ({borderRadius: 1000, width: x, height: x}),

  // Distancing
  padding:       (x) => ({padding: x}),
  paddings:      (x) => ({paddingTop: x[0], paddingRight: or(x[1], x[0]), paddingBottom: or(x[2], x[0]), paddingLeft: or(x[3], x[1], x[0])}),
  paddingH:      (x) => ({paddingLeft: x, paddingRight: x}),
  paddingV:      (x) => ({paddingTop: x, paddingBottom: x}),
  paddingTop:    (x) => ({paddingTop: x}),
  paddingBottom: (x) => ({paddingBottom: x}),
  paddingRight:  (x) => ({paddingRight: x}),
  paddingLeft:   (x) => ({paddingLeft: x}),

  margin:        (x) => ({margin: x}),
  margins:       (x) => ({marginTop: x[0], marginRight: or(x[1], x[0]), marginBottom: or(x[2], x[0]), marginLeft: or(x[3], x[1], x[0])}),
  marginH:       (x) => ({marginLeft: x, marginRight: x}),
  marginV:       (x) => ({marginTop: x, marginBottom: x}),
  marginTop:     (x) => ({marginTop: x}),
  marginBottom:  (x) => ({marginBottom: x}),
  marginRight:   (x) => ({marginRight: x}),
  marginLeft:    (x) => ({marginLeft: x}),

  // Others
  pointer:  {cursor: "pointer"},
  noBorder: {border: 0},
  border:   (x, y) => ({borderWidth: x, borderColor: y}),
  borders:  (x, y) => ({borderTopWidth: x[0], borderRightWidth: or(x[1], x[0]), borderBottomWidth: or(x[2], x[0]), borderLeftWidth: or(x[3], x[1], x[0]), borderColor: y}),
  radius:   (x) => ({borderRadius: x}),
  radii:    (x) => ({borderTopLeftRadius: x[0], borderTopRightRadius: or(x[1], x[0]), borderBottomRightRadius: or(x[2], x[0]), borderBottomLeftRadius: or(x[3], x[1], x[0])}),
  zindex:   (x) => ({zIndex: x}),
  opacity:  (x) => ({opacity: x}),

  // General: simple
  rotate:       { transform: [{rotate: '-90deg'}] },
  translucid:   { opacity: 0.6 },
  noFontFamily: { fontFamily: '' },
  fontFamily: (x) => ({ fontFamily: x }),
  heightForWidth: { width: Height },
  widthForHeight: { height: Width },
  topBarHeight,

  // General: complex
  textAlignCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
}