import LikeButton from "./LikeButton.js"

function Media({ title, uploadDate, views, downVotes, upVotes, handleVoteClick, isCommentView, toggleCommentView }){
  
  return(
    <div>
      <h2>{title}</h2>
      <p>{views} Views | Uploaded: {uploadDate}</p>
      <LikeButton id='upVoteBtn' content="👍" votes={upVotes} handleVoteClick={handleVoteClick}  />
      <LikeButton id='downVoteBtn' content="👎" votes={downVotes} handleVoteClick={handleVoteClick} />
      <br />
      <button id="hideBtn" onClick={toggleCommentView}>{isCommentView ? 'Hide': 'Show'} Comments</button>
    </div>
  )
}

export default Media;