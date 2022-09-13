import { Link } from 'react-router-dom';


const VideoCard = ({notes, setNoteData, playlist, video}) => {

  return (
    <>
      <div className='videoContainerDiv'>
        <div className='videoCard'>
          <h2>{video.title}</h2>
          <img src={`https://img.youtube.com/vi/${video.videoId}/sddefault.jpg`} className="card-img-top" alt="..."/>
          <Link to="/videoshow" key={video} state={{video}}><button className="takeNoteBtn" >Take Notes!</button></Link>
        </div>
      </div>
    </>
  );
}

export default VideoCard;