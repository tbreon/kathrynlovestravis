import React from 'react';
import '../kathrynlovestravis.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
    <div className="panel-body">
    <p><span className="postName">{props.postBody.name}</span>  <span className="postDate">{props.postBody.date}</span></p>
        <p >{props.postBody.post}</p>
        </div>
        </div>
)

export default Post;