import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
  isPlaying: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {previewImage, previewVideoLink, isPlaying} = props;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isPlaying && videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    return () => {
      if (isPlaying && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.src = previewVideoLink;
        if (timeOut)  {
          clearTimeout(timeOut);
        }
      }
    };
  });

  return (
    <video src={previewVideoLink} poster={previewImage} ref={videoRef} width="280" height="175" muted/>
  );
}

export default VideoPlayer;
