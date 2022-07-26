import VideoCard from '../../components/VideoCard/VideoCard'
import AddNote from '../../components/AddNote/AddNote';
import NoteShow from '../../components/NoteShow/NoteShow';

const VideoList = (props) => {
  return (
    <>
      <div>
        <VideoCard notes={props.notes} />
      </div>
    </>
  );
}

export default VideoList; 