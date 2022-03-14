import {Review} from '../../types/review';

type ReviewProps = {
  review: Review
}
function ReviewItem(props: ReviewProps):JSX.Element {
  const {review} = props;
  const renderTime = (date: string) => new Date(date).toLocaleString();
  const time = renderTime(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={time}>{time}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default ReviewItem;
