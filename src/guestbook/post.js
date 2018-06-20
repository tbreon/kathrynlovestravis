import React, { Component } from 'react';
import '../kathrynlovestravis.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
    <div className="panel-body">
        {props.postBody}
        </div>
        </div>
)

export default Post;