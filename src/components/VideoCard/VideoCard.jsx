import { Link, useLocation } from 'react-router-dom';
import YoutubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1';
import { useEffect} from 'react';



const VideoCard = ({notes, setNoteData}) => {
  const location = useLocation()

  // useEffect(()=>{
  //   const fetchNote = async() => {
  //     const noteData = await (location.state.note)

  //     setNoteData(noteData)
  //   }
  //   fetchNote()
  // // },[location.state.note])

  return (
    <>
      {/* < YoutubeEmbed1 /> */}
      <Link to={'/videoShow'} state={{notes}}/>
    </>
  );
}

export default VideoCard;