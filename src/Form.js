import React, {Component} from "react"
import styled from "styled-components"


const Root = styled.div`
  background-color: #ecf0f1;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem;
`

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
`

class Form extends Component {
  constructor(props){
    super(props)
    this.state = ({
      name: ""
    })

    this.submitName = this.submitName.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  submitName(e){
    e.preventDefault()
    alert('A name was submitted: ' + this.state.name);
  }

  render(){
    return(
      <Root>
        <p>Sagt mir deine Name:</p>
        <form onSubmit={this.submitName}>
          <StyledInput value={this.state.value} onChange={this.handleChange} type="text" placeholder="Name..."/>
          <button type="submit">Save</button>
        </form>
        <p>{this.state.name}</p>
      </Root>
    )
  }
}

export default Form
