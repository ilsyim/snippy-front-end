
const YoutubeEmbed1 = (props) => {

  return (
    <>
      <iframe 
      width="1000" 
      height="562" 
      src={`https://www.youtube.com/embed/${props.videoId}`}
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      title="Intro to React" 
      />
    </>
  );
}

export default YoutubeEmbed1;