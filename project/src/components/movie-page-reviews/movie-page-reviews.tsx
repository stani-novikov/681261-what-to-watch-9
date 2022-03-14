import {Review} from '../../types/review';
import ReviewItem from '../review-item/review-item';

type MoviePageReviewsProps = {
  reviews: Review[];
}

function MoviePageReviews({reviews}: MoviePageReviewsProps):JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) =>
            <ReviewItem review={review} key={review.id}/>,
          )
        }
      </div>
    </div>
  );
}

export default MoviePageReviews;
