import './style.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre} from '../../store/action';

type FilterItemProps = {
  genre: string;
}

function FilterItem(props: FilterItemProps): JSX.Element {
  const {genre} = props;
  const activeFilter = useSelector((state: { genre: string; }) => state.genre);
  const dispatch = useDispatch();

  return (
    <li
      className={activeFilter === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
      onClick={(evt) => {
        dispatch(changeGenre(genre));
      }}
    >
      <span className="catalog__genres-link">{genre}</span>
    </li>
  );
}

export default FilterItem;
