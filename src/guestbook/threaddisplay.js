import React, { Component } from 'react';
import '../kathrynlovestravis.css';
import Post from './post.js';
import Posteditor from './posteditor.js';
import { base } from './firebase.js'
import firebase from 'firebase';


class Threaddisplay extends Component{
    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts: {},         
    }
    }

    addPost(newPostBody){
       const posts = {...this.state.posts};
       const id = Date.now();
       posts[id] = {
           id: id,
           post: newPostBody,
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
          <Post key={i} postBody={post.post}/>
    );
  })
   }
    <Posteditor addPost={this.addPost}/>
    </div>
)
    }
}

export default Threaddisplay;