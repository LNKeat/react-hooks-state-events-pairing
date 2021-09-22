
function Media({ src, title }){
  return(
    <div>
      <iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

export default Media;