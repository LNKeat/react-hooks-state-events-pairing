function LikeButton({ content, votes, handleVoteClick, id }){
  return (
    <button id={id} onClick={handleVoteClick}>{votes} {content}</button>
  )
}

export default LikeButton