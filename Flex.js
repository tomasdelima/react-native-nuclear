import React, { Component } from 'react'

class Flex extends Component {
  element () {
    if (this.props.children && ["String", "Number"].indexOf(this.props.children.constructor.name) >= 0) {
      return Text
    } else {
      return View
    }
  }

  render () {
    var style = (this.props.children && ["String", "Number"].indexOf(this.props.children.constructor.name) >= 0) ? [] : [s.flex(1), s.center1, s.center2]

    Object.keys(this.props).map(prop => {
      if (s[prop]) {
        if (s[prop].constructor.name == "Function") {
          style.push(s[prop](this.props[prop]))
        } else {
          style.push(s[prop])
        }
      }
    })

    var component = React.createElement(
      this.element(),
      Object.assign({behavior2: 'padding'}, this.props, {style: style.concat(this.props.style)}),
      this.props.children
    )

    if (this.props.onPress) {
      return <TouchableOpacity
        style={[s.flex(1), this.props.containerStyle]}
        onPress={this.props.onPress}
      >{component}</TouchableOpacity>
    }

    if (this.props.scroll) {
      return <ScrollView
        showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
        style={[s.flex(1), this.props.containerStyle]}
        ref={component => this.props.scroll.scrollview = component}
        contentContainerStyle={this.props.contentContainerStyle}
        keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
      >{component}</ScrollView>
    }

    return component
  }
}

global.Flex = Flex