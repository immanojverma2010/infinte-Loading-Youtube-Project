import React, { Component } from 'react';
import { createPost } from "../../actions/actions_post";
import { connect } from "react-redux";



class  PostsNew extends Component {
constructor(props){
  super(props);
  this.title="";
  this.body="";

}


createPost(){
  var data = {
    "title": this.title,
     "body": this.body,
     "userId": 3
  }
  this.props.createPost(data, ()=>{
    this.props.history.push("/");
  });
}
render(){
  return (
  <div>
    <input type="text" name="title" placeholder="title"  onChange={(e)=>{this.title=e.target.value}}/>
    <br></br>
    <input type="text" name="body"  placeholder="body" onChange={(e)=>{this.body=e.target.value}}/>
<button type="button" onClick={this.createPost.bind(this)}>Create Post</button>
  </div>
)
}

}


const mapDispatchtoProps = {
  createPost
}

export default connect(null ,mapDispatchtoProps)(PostsNew);
