import VideoCard from '../../components/VideoCard/VideoCard'
import AddNote from '../../components/AddNote/AddNote';

const VideoList = (props) => {
  return (
    <>
      <AddNote notes={props.notes} setNotes={props.setNotes}/>
      <VideoCard notes={props.notes} />
    </>
  );
}

export default VideoList; 