import React, { Component } from 'react'

export default class Class extends Component {
  render() {
    return (
      <div className="class-component">
          <h1>This is created using Class Component</h1>
        <p className="paragraph">This is done using external CSS</p>
        <p style={{ fontFamily: "sans-serif", color: "blue" }}>
          This is done using inline CSS
        </p>
            
      </div>
    )
  }
}
