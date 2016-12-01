import React from 'react';


class Comment extends React.Component{
  render(){
    return(
	    <div className="comment" >
			<h4>{this.props.author}</h4>
			<p>{this.props.body}</p>
	    </div>
    );
  }
}

class CommentBox extends React.Component{
	constructor() {
    super();

    this.state = {
      showComments: false
    };
  }

  render(){
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

    if (this.state.showComments){
    	//code for displaying comments
      buttonText = 'Hide Comments';
    	commentNodes = <div> {comments} </div>;
    }
    const commentsTitle = this._getCommentsTitle(comments.length);
    return(
	    <div >
        	<h3>{ commentsTitle }</h3>
          <button onClick={this._handleClick.bind(this)}>{ buttonText }</button>
			    { commentNodes }
	    </div>
    );
  }
  _getComments(){
  	const commentList = [
  		{id:1, author:"Melissa Ramirez", body:"Great picture!"},
  		{id:2, author:"Cesar Pino", body:"Excellent stuff"}
  	]
  
    return commentList.map((comment)=>{
    	return (
    			<Comment author={comment.author} body={comment.body} key={comment.id}/>
    		);
    });
  };

  _getCommentsTitle(commentCount){
    if (commentCount === 0) {
      return "No Comments yet";
    } else if (commentCount === 1){
      return "1 Comment";
    } else {
      return ` ${commentCount} Comments`;
    }
  }

  _handleClick(){
    this.setState({
      showComments: !this.state.showComments
    })
  }
}

export default CommentBox;