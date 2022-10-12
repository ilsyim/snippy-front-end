import YoutubeEmbed1 from "../../components/YoutubeEmbed1/YoutubeEmbed1";
import NoteShow from "../../components/NoteShow/NoteShow";
import { useLocation } from "react-router-dom";

const VideoShow = (props) => {
  const location = useLocation()
  console.log('location.state.video.videoId', location.state.video.videoId)
  return (
    <>
          <div className="videoShow">
            <div><YoutubeEmbed1 videoId={location.state.video.videoId}/></div>
            <div><NoteShow user={props.user}notes={props.notes} setNotes={props.setNotes} handleDeleteNote= {props.handleDeleteNote} videoId={location.state.video.videoId}/></div>
          </div>
    </>
  );
}

export default VideoShow;