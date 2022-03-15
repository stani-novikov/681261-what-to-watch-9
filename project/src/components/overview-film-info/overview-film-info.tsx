import {Film} from '../../types/films';

type OverviewFilmInfoProps = {
  film: Film
}

function OverviewFilmInfo(props:OverviewFilmInfoProps):JSX.Element {
  const {rating, description, starring, director} = props.film;
  const renderStarringList = () => {
    const maxStarsCount = 4;
    let result = starring.slice(0, maxStarsCount).join(', ');

    if (starring.length > maxStarsCount) {
      result += ' and other.';
    }

    return result;
  };

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
            Starring: {renderStarringList()}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewFilmInfo;
