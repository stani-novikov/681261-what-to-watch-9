import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../videoplayer/videoPlayer';
import {Film} from '../../types/films';
import {useState} from 'react';

type FilmCardProps = {
  film: Film;
  setActiveCard: (id: number) => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, setActiveCard} = props;
  const [isPlaying, setPlayState] = useState(false);

  const onMouseOver = () => {
    setActiveCard(film.id);
    setPlayState(true);
  };

  const onMouseLeave = () => {
    setActiveCard(0);
    setPlayState(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {onMouseOver();}}
      onMouseLeave={() => {onMouseLeave();}}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          previewVideoLink={film.previewVideoLink}
          previewImage={film.previewImage}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={generatePath(AppRoute.Film, {id: String(film.id)})}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
