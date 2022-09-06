
const YoutubeEmbed1 = (props) => {
  console.log(props.videoId)
  return (
    <>
      <iframe 
      width="1000" 
      height="562" 
      src={`https://www.youtube.com/embed/${props.videoId}`}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen 
      title="Intro to React" />
    </>
  );
}

export default YoutubeEmbed1;