import {useState} from 'react';
import RatingInput from './rating-input';

const RATING = [10,9,8,7,6,5,4,3,2,1];

function ReviewForm(): JSX.Element {
  const setRatingCount = useState(0)[1];
  const [text, setText] = useState('');

  function textInputHandler(evt: any) {
    setText(evt.target.value);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              RATING.map((el) => <RatingInput value={el} key={el} changeHandler={setRatingCount} />)
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text"
            value={text}
            onInput={textInputHandler}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
