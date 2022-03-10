import {useEffect, useRef} from 'react';
import './videoplayer.css';

type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
  isPlaying: boolean;
}

const VIDEO_PLAY_DELAY = 1000;

function Videoplayer(props: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {previewImage, previewVideoLink, isPlaying} = props;
  useEffect(() => {
    const video = videoRef.current;
    const timeout = setTimeout(() => {
      if (isPlaying && video) {
        video.play();
      }
    }, VIDEO_PLAY_DELAY);
    return () => {
      if (isPlaying && video) {
        video.src = previewVideoLink;
      }
      clearTimeout(timeout);
    };
  }, [isPlaying, previewVideoLink]);
  return (
    <video className='videoplayer' src={previewVideoLink} poster={previewImage} ref={videoRef} muted/>
  );
}

export default Videoplayer;
