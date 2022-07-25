import { Link } from 'react-router-dom';
import YoutubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1';
import YouTubeEmbed1 from '../YoutubeEmbed1/YoutubeEmbed1'

const VideoCard = ({notes}) => {
  return (
    <>
      {/* < YoutubeEmbed1 /> */}
      <Link to={'/videoShow'} state={{notes}}/>
    </>
  );
}

export default VideoCard;