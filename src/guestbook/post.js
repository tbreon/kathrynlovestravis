import React from 'react';
import '../kathrynlovestravis.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
    <div className="panel-body">
        <p>{props.postBody}</p>
        </div>
        </div>
)

export default Post;