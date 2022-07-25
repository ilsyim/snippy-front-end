import YoutubeEmbed1 from "../../components/YoutubeEmbed1/YoutubeEmbed1";
import NoteShow from "../../components/NoteShow/NoteShow";
import AddNote from "../../components/AddNote/AddNote";

const VideoShow = (props) => {


  return (
    <>
      <div>

        <div><YoutubeEmbed1 /></div>
        <div><NoteShow notes={props.notes}/></div>
      </div>
    </>
  );
}

export default VideoShow;