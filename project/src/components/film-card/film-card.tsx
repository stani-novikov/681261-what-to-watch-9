import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';

type FilmCardProps = {
  previewImage: string;
  name: string;
  id: number;
  onHover: (id: number) => void;
}

function FilmCard({previewImage, name, id, onHover}: FilmCardProps): JSX.Element {

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {onHover(id);}}
      onMouseLeave={() => {onHover(0);}}
    >
      <div className="small-film-card__image">
        <img src={previewImage}
          alt={name} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={generatePath(AppRoute.Film, {id: String(id)})}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
