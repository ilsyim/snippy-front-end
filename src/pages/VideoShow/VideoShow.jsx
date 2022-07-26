import YoutubeEmbed1 from "../../components/YoutubeEmbed1/YoutubeEmbed1";
import NoteShow from "../../components/NoteShow/NoteShow";
import AddNote from "../../components/AddNote/AddNote";

const VideoShow = (props) => {


  return (
    <>
      <div>
        <h1>VideoShow</h1>
        <div><YoutubeEmbed1 /></div>
        <div><NoteShow /></div>
      </div>
    </>
  );
}

export default VideoShow;