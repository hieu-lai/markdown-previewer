import React from 'react';
import marked from 'marked';

const initialText = 'Heading\n=======\n\nSub-heading\n-----------\n\n' +
                    '### Another deeper heading \n\nParagraphs are' +
                    'separated \nby a blank line.\n\nLeave 2 spaces ' +
                    'at the end of a line to do a  \nline break. \n\n' +
                    'Text attributes *italic*, **bold**, `monospace`, ' +
                    '\n~~strikethrough~~ .\n\nShopping list:\n\n ' +
                    '*apples\n *oranges\n *pears\n\nNumbered list:\n\n ' +
                    '1.apples\n 2.oranges\n 3.pears\n\n' + 
                    "No worries ---mate---she'll be right."; 

export default class MarkdownPreviewer extends React.Component {
  state = {
    input: initialText
  };
  handleChange = (event) => {
    const change = event.target.value;
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

