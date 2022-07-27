import YoutubeEmbed1 from "../../components/YoutubeEmbed1/YoutubeEmbed1";
import NoteShow from "../../components/NoteShow/NoteShow";

const VideoShow = (props) => {


  return (
    <>
      <div className="videoShow">
        <div><YoutubeEmbed1 /></div>
        <div><NoteShow user={props.user}notes={props.notes} setNotes={props.setNotes} handleDeleteNote= {props.handleDeleteNote}/></div>
        {/* <div><NoteShow notes={props.notes} handleAddNote={props.handleAddNote}/></div> */}
      </div>
    </>
  );
}

export default VideoShow;