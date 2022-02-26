import {Link} from 'react-router-dom';

type FilmCardProps = {
  previewImage: string
  name: string
  id: number
  hoverHandler: (id: number) => void
}

function FilmCard({previewImage, name, id, hoverHandler}: FilmCardProps): JSX.Element {

  function onMouseOverHandler() {
    hoverHandler(id);
  }

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={onMouseOverHandler}
    >
      <div className="small-film-card__image">
        <img src={previewImage}
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
