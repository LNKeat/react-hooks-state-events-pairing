import React, { useState } from 'react'
import video from "../data/video.js";
import Media from "./Media.js"
import MediaDetails from "./MediaDetails.js"
import Comments from "./Comments.js"
console.log("data: ", video)

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [isCommentView, setIsCommentView] = useState(true)

  function handleVoteClick(e){
    let count;
    if(e.target.id === 'upVoteBtn'){
      count = upVotes + 1
      setUpVotes(count)
    }else{
      count = downVotes + 1
      setDownVotes(count)
    }
  }

  function toggleCommentView(){
    isCommentView ? setIsCommentView(false) : setIsCommentView(true)
  }

  return (
    <div className="App">
     <Media src={video.embedUrl} title={video.title} />
     <MediaDetails 
     title={video.title} 
     uploadDate={video.createdAt} 
     views={video.views}
     downVotes={downVotes}
     upVotes={upVotes}
     handleVoteClick={handleVoteClick}
     isCommentView={isCommentView}
     toggleCommentView={toggleCommentView}
      />
      <hr />
      {
        isCommentView ? <Comments comments={video.comments} /> : null
      }
      
    </div>
  );
}

export default App;
