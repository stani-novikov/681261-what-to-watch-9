import './filter-item.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre} from '../../store/action';
import { StoreState } from '../../store/reducer';

type FilterItemProps = {
  genre: string;
}

function FilterItem(props: FilterItemProps): JSX.Element {
  const {genre} = props;
  const activeFilter = useSelector((state: StoreState) => state.genre);
  const dispatch = useDispatch();

  return (
    <li
      className={`catalog__genres-item ${activeFilter === genre ? 'catalog__genres-item--active' : ''}`}
      onClick={(evt) => {
        dispatch(changeGenre(genre));
      }}
    >
      <span className="catalog__genres-link">{genre}</span>
    </li>
  );
}

export default FilterItem;
