import React from 'react';

export default class MarkdownPreviewer extends React.Component {
  state = {
    input: ''
  };
  handleChange = (event) => {
    const change = event.target.value; 
    console.log(change);
    this.setState((prevState) => ({input: prevState.input.concat(change)}));  
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>   
        <textarea 
          type="text" 
          onChange={this.handleChange}
          value={this.state.input}
        ></textarea>
        <div>
          {this.state.input}
        </div>     
      </div>
    )
  }
}

