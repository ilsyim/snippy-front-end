import { useNavigate, useLocation } from 'react-router-dom';
import YoutubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1';
import { useEffect} from 'react';



const VideoCard = ({notes, setNoteData}) => {
  const location = useLocation()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   const fetchNote = async() => {
  //     const noteData = await (location.state.note)

  //     setNoteData(noteData)
  //   }
  //   fetchNote()
  // // },[location.state.note])




  const handleClick = () => {
    navigate('/videoShow')
  }

  return (
    <>
      <div className='videoContainerDiv'>
        <div className='videoCard'>

            <h2>Intro to React and SPAs</h2>
            <img src="./Screenshots/React Video 84.png" alt="Video 84" />
            <button  className="takeNoteBtn" onClick={() => handleClick()} >Take Notes!</button>

        </div>
        <div className='videoCard'>

            <h2>Intro to JSX</h2>
            <img src="./Screenshots/React Video 85.png" alt="Video 85" />
            <button  className="takeNoteBtn" onClick={() => handleClick()} >Take Notes!</button>

        </div>
        <div className='videoCard'>

            <h2>React Hooks and State</h2>
            <img src="./Screenshots/React Video 86.png" alt="Video 86" />
            <button className="takeNoteBtn" onClick={() => handleClick()} >Take Notes!</button>

        </div>
    </div>
    </>
  );
}

export default VideoCard;