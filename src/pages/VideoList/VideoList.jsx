import VideoCard from '../../components/VideoCard/VideoCard'


const VideoList = (props) => {
  
  return (
    <>
      {props.user ? 
      <div className='allVideos'>
        {props.playlist.map((video, idx) =>
          <VideoCard key={idx} notes={props.notes} playlist={props.playlist} video={video}/>
          )}
      </div>
      
      : <div className="LoginMessage">
          <h3 id="welcome">Welcome to SNIPPY!</h3>
          <p id="introMsg">Here you can organize your notes by storing them according to the YouTube lecture they are associated with.</p>
          <p id="loginNow">Log in to take notes!</p>
        </div>
      }
    </>
  );
}

export default VideoList;