import { useNavigate, useLocation, Link } from 'react-router-dom';
import YoutubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1';
import { useEffect } from 'react';




const VideoCard = ({notes, setNoteData, playlist, videoId}) => {
  const navigate = useNavigate()
  const location = useLocation()

  // useEffect(()=>{
  //   const fetchNote = async() => {
  //     const noteData = await (location.state.note)

  //     setNoteData(noteData)
  //   }
  //   fetchNote()
  // // },[location.state.note])
  


  
  // const handleClick = () => {
  //   navigate("/videoShow")
    
  // }

  return (
    <>
      <div className='videoContainerDiv'>
        <div className='videoCard'>
          <h2>Title</h2>
          <img src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`} class="card-img-top" alt="..."/>
          <Link to="/videoshow" key={videoId} state={{videoId}}><button className="takeNoteBtn" >Take Notes!</button></Link>
        </div>
      </div>
    </>
  );
}

export default VideoCard;