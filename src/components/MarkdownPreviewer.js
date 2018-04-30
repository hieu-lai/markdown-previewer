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
  renderMarkdown = () => {
    return marked(this.state.input);
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
        <div dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} />
          
            
      </div>
    )
  }
}

