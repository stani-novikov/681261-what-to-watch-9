import {Review} from '../../types/review';

type ReviewProps = {
  review: Review
}
function ReviewItem(props: ReviewProps):JSX.Element {
  const {review} = props;
  const renderTime = (date: string) => {
    const rawTime = new Date(date);
    const month = rawTime.toLocaleString('en', {month: 'long'});
    const day = rawTime.getDay();
    const year = rawTime.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const time = renderTime(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{time}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default ReviewItem;
