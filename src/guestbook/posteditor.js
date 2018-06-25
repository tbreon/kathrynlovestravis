import React, {Component} from 'react';
import '../kathrynlovestravis.css';

class Posteditor extends Component{
    constructor(props){
        super(props);

        this.state = {
            newPostBody: '',
            newName: ''
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.handleNameEditorInputChange = this.handleNameEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

     handlePostEditorInputChange(ev){
        this.setState({
            newPostBody: ev.target.value,
        })
    } 

     handleNameEditorInputChange(ev){
        this.setState({
            newName: ev.target.value,
        })
    } 

    createPost(){
        this.props.addPost(this.state.newPostBody, this.state.newName);
        this.setState({
            newPostBody: '',
            newName: ''
        })
    }

    render(){
        return(
    <div className="panel panel-default post-editor">
    <div className="panel-body">
     <input type="text" className="form-control post-editor-input" name="Name" placeholder="Your Name" value={this.state.newName}  onChange={this.handleNameEditorInputChange}/>
     <br/>
     <textarea className="form-control post-editor-input" value={this.state.newPostBody} placeholder="Your message..." onChange={this.handlePostEditorInputChange}/>
        <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
        </div>
        </div>
)
}
}

export default Posteditor;