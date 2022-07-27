import VideoCard from '../../components/VideoCard/VideoCard'
import AddNote from '../../components/AddNote/AddNote';
import NoteShow from '../../components/NoteShow/NoteShow';

const VideoList = (props) => {

  
  return (
    <>
      {props.user ? 
      <div>
        <VideoCard notes={props.notes} />
      </div>
      
      : <div className="LoginMessage"><p>Login to take notes</p></div>
      }
    </>
  );
}

export default VideoList;