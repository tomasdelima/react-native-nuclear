import React, { Component } from 'react'

class Write extends Component {
  render () {
    var style = [nuclearConfigs.defaultWriteStyle()]

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
      Text,
      Object.assign({}, this.props, {style: style.concat(this.props.style)}),
      this.props.children
    )

    return component
  }
}

global.Write = Write