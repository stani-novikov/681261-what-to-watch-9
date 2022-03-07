import {Film} from '../../types/films';

type DetailFilmInfoProps = {
  film: Film
}

function OverviewFilmInfo(props:DetailFilmInfoProps):JSX.Element {
  const {rating, description, starring, director} = props.film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {description}
        </p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.map((el) => el)}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewFilmInfo;
