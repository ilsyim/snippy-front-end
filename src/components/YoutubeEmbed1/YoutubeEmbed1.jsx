
const YoutubeEmbed1 = (props) => {

  return (
    <>
      <iframe 
      src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      title="Intro to React" 
      className="iframe"
      />
    </>
  );
}

export default YoutubeEmbed1;