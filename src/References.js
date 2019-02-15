import React, { Component } from 'react'
import Students from './Students'

var students = [ 'Muhh', 'av'
]
export class References extends Component {
  constructor() {
    super()
    this.state = {
      toggleValue: true,
      students: students
    }
  }
  
  render() {
    const toggleValue = this.state.toggleValue;
    const students = this.state.students;
    
    return (
      <div>
        <h2>References</h2>
        <div>
          <h3>Instructions</h3>
          <p>Try clicking the toggle button and notice what happens to the Students section. Why is this happening? How can we fix it?</p>
        </div>
        <div>
          <h3>Toggle</h3>
          Toggle value is {toggleValue ? 'true' : 'false'}
          {' '}
          <button onClick={() => this.setState({ toggleValue: !toggleValue })}>Toggle</button>
        </div>
        <Students students={students} />
      </div>
    )
  }
}

export default References
