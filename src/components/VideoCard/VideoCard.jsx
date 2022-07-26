import { Link, useNavigate } from 'react-router-dom';
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

const VideoCard = ({notes}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/videoShow')
  }

  return (
    <>
      <div>
        <Link to={'/videoShow'} state={{notes}}/>
          <h2>Intro to React and SPAs</h2>
          <img src="./Screenshots/React Video 84.png" alt="Video 84" />
          <button onClick={() => handleClick()} >Take Notes!</button>

      </div>
    </>
  );
}

export default VideoCard;