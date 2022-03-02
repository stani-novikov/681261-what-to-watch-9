type RatingInputProps = {
  value: number;
  onChange: (value: number) => void;
  currentRating: number;
}

function RatingInput({value, onChange, currentRating}: RatingInputProps):JSX.Element {
  const isChecked = value === currentRating;

  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" checked={isChecked} name="rating" value={value} onChange={() => {onChange(value);}}/>
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default RatingInput;
