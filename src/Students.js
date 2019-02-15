import React, { Component } from 'react'

export class Students extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>Students</h3>
        <div className="list">
          {this.props.students.map(x => {
            x = x + ' is awesome!'
            return <div>{x}</div>
          })}
        </div>
      </div>
    )
  }
}

export default Students
