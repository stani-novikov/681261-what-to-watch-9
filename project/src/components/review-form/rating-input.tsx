type RatingInputProps = {
  value: number
  changeHandler: (value: number) => void
}

function RatingInput({value, changeHandler}: RatingInputProps):JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} onChange={() => {changeHandler(value);}}/>
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default RatingInput;
