import React, { Component } from 'react';
import '../kathrynlovestravis.css';
import Post from './post.js';
import Posteditor from './posteditor.js';
import { base } from '../firebase/firebase.js';
const moment = require('moment');

class Threaddisplay extends Component{
    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts: {},         
    }
    }

    addPost(newPostBody, newName){
       const posts = {...this.state.posts};
       const id = Date.now();
       const date = moment().format('MMMM Do YYYY, h:mm:ss a');
       posts[id] = {
           id: id,
           date: date,
           post: newPostBody,
           name: newName,
       }
       this.setState({posts});
    }

    componentWillMount(){
        this.postsRef = base.syncState('posts',{
            context: this,
            state: 'posts'
        })
    }

    componentWillUnmount(){
        base.removeBinding(this.postsRef)
    }

    render(){
        return(
    <div className="thebrideandgroom">
    <h1>Guest Book</h1>
   {
Object.values(this.state.posts).map((post, i) => {
    let categories = Object.keys(post);
    categories.pop();
    return (
          <Post key={i} postBody={post}/>
    );
  })
   }
    <Posteditor addPost={this.addPost}/>
    </div>
)
    }
}

export default Threaddisplay;