import React, { Component } from 'react';
import '../kathrynlovestravis.css';
import Post from './post.js';
import Posteditor from './posteditor.js';
import { base } from '../firebase/firebase.js';
import html2canvas from 'html2canvas';
const moment = require('moment');
const jsPDF = require('jspdf');

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

    createPDF() {
        const input = document.getElementById('content');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF("l", "mm", "a4");
            pdf.addImage(imgData, 'JPEG', 0, 10);
            pdf.save("guestbook.pdf");
          })
        ;
        }

    render(){
        return(
    <div className="thebrideandgroom">
    <h1>Guest Book</h1>
    <div id="content">
   {
Object.values(this.state.posts).map((post, i) => {
    let categories = Object.keys(post);
    categories.pop();
    return (
          <Post key={i} postBody={post}/>
    );
  })
   }
   </div>
    <Posteditor addPost={this.addPost}/>
    <button className="btn btn-success " onClick={this.createPDF}>Save Guest Comments!</button>
    </div>
)
    }
}

export default Threaddisplay;