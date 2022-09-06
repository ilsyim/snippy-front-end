import VideoCard from '../../components/VideoCard/VideoCard'
import AddNote from '../../components/AddNote/AddNote';
import NoteShow from '../../components/NoteShow/NoteShow';

const VideoList = (props) => {

  
  return (
    <>
      {props.user ? 
      <div>
        {props.playlist.map(videoId=>
          <VideoCard notes={props.notes} playlist={props.playlist} videoId={videoId}/>
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