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
<<<<<<< HEAD
            x = x + ' is awesome!'
            return <div>{x}</div>
=======
            x.name = x.name + ' is awesome!'
            return <div key={x.name}>{x.name}</div>
>>>>>>> 9134b14d08ec0b2d5d7b08090b603850000bd796
          })}
        </div>
      </div>
    )
  }
}

export default Students
