import React from 'react';


class Comment extends React.Component{
  render(){
    return(
	    <div>
			<h2>{this.props.author}</h2>
			<p>{this.props.body}</p>
	    </div>
    );
  }
}

class CommentBox extends React.Component{
  render(){
    const comments = this._getComments();
    const commentsTitle = this._getCommentsTitle(comments.length);
    return(
	    <div >
        <h2>{ commentsTitle }</h2>
			 {comments}
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
}

export default CommentBox;