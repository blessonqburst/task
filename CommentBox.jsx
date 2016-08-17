import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import Button from 'react-bootstrap/lib/Button';
let data = require('json!./comments.json');


var CommentBox = React.createClass({
  handleChange: function(e)
  {
    const val=box1.value;
    const val2=box2.value;
  console.log("success");
  data.push("hhaaaai");
  console.log(data);
  },
  render: function() {
    return (
      <div className="commentBox">
        <label>Name:</label>
        <input className = "namecomment" placeholder="Enter name" id="box1"></input><br></br>
        <label>Comment:</label>
          <textarea rows="5" cols="40" id ="box2"></textarea><br></br>
            <Button bsStyle="success" onClick={this.handleChange}>POST</Button>
      </div>
    );
  }
});


export default CommentBox;
