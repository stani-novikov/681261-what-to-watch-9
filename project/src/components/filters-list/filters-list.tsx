import FilterItem from '../filter-item/filter-item';

type FiltersListProps = {
  genres: string[]
}

function FiltersList(props: FiltersListProps): JSX.Element {
  const {genres} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((el) => (<FilterItem genre={el} key={el}/>))
      }
    </ul>
  );
}

export default FiltersList;
