import { Link, useNavigate } from 'react-router-dom';
import YoutubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1';
import YouTubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1'

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