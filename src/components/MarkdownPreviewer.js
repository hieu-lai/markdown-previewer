import React from 'react';
import marked from 'marked';

export default class MarkdownPreviewer extends React.Component {
  state = {
    input: ''
  };
  handleChange = (event) => {
    const change = event.target.value; 
    //console.log(change);
    this.setState((prevState) => ({ input: change }));  
  };
  render() {
    return (
      <div>
        <h1 className="header">Markdown Previewer</h1>   
        <div className="container">
          <textarea 
            className="textArea"
            type="text" 
            onChange={this.handleChange}
            value={this.state.input}
          ></textarea>
          <div
            className="outputArea" 
            dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} />    
        </div>
      </div>
    )
  }
}

