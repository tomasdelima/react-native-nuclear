import React from 'react'

class Component extends React.Component {
  constructor (props) {
    let style = []

    Object.keys(props).forEach(prop => {
      if (s[prop]) {
        if (s[prop].constructor.name == "Function") {
          style.push(s[prop](props[prop]))
        } else {
          style.push(s[prop])
        }
      }
    })

    props.style = style.concat(props.style)
  }
}