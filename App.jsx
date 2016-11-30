import React from 'react';


class Comment extends React.Component{
  render(){
    return(
	    <div>
			<p>{this.props.head}</p>
			<p>{this.props.body}</p>
	    </div>
    );
  }
}

class CommentBox extends React.Component{
  render(){
    return(
	    <div>
			<Comment head="Anie" body="this post is about love..."/>
			<Comment head="Carlos" body="this post is about pokemon go..."/>
	    </div>
    );
  }
}

export default CommentBox;