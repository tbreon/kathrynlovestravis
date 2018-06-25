import React, {Component} from 'react';
import '../kathrynlovestravis.css';

class Posteditor extends Component{
    constructor(props){
        super(props);

        this.state = {
            newPostBody: '',
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(ev){
        this.setState({
            newPostBody: ev.target.value
        })
    }

    createPost(){
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: ''
        })
    }

    render(){
        return(
    <div className="panel panel-default post-editor">
    <div className="panel-body">
    {/* <input type="text" name="Name" placeholder="Your Name"/>
    <input type="text" name="Email" placeholder="Email Address (will not be displayed in post)"/> */}
        <textarea className="form-control post-editor-input" value={this.state.newPostBody} placeholder="Your message..." onChange={this.handlePostEditorInputChange}/>
        <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
        </div>
        </div>
)
}
}

export default Posteditor;