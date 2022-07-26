import YoutubeEmbed1 from "../../components/YoutubeEmbed1/YoutubeEmbed1";
import NoteShow from "../../components/NoteShow/NoteShow";

const VideoShow = (props) => {


  return (
    <>
      <div>
        <h1>VideoShow</h1>
        <div><YoutubeEmbed1 /></div>
        <div><NoteShow /></div>
        <div><NoteShow notes={props.notes} handleAddNote={props.handleAddNote}/></div>
      </div>
    </>
  );
}

export default VideoShow;