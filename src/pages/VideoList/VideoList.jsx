import VideoCard from '../../components/VideoCard/VideoCard'
import AddNote from '../../components/AddNote/AddNote';

const VideoList = (props) => {
  return (
    <>
      <AddNote />
      <VideoCard notes={props.notes} />
    </>
  );
}

export default VideoList; 