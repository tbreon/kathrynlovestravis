import React, { Component } from 'react';
import '../kathrynlovestravis.css';
import Post from './post.js';
import Posteditor from './posteditor.js'


class Threaddisplay extends Component{
    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts: [],         
    }
    }

    addPost(newPostBody){
        this.setState((prevState, props) => {
            const newPost = newPostBody;
            const post = prevState.posts;
            post.push(newPost);
            return{
                posts: post,  
            }; 
        });
    }

    render(){
        return(
    <div className="thebrideandgroom">
    <h1>Guest Book</h1>
    { 
        this.state.posts.map((postBody, idx) => {
            return(
                <Post key={idx} postBody={postBody}/>
            )
    })
    }
    <Posteditor addPost={this.addPost}/>
    </div>
)
    }
}

export default Threaddisplay;