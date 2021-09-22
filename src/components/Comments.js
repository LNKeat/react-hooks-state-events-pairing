

function Comments({ comments }){
  return(
    <div>
      <h2>{comments.length} Comments</h2>
      {
        comments.map((comment, ind) => {
          return (
            <div key={ind}>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments;