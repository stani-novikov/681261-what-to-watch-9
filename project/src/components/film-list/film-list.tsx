import {Film} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/reducer';
import Spinner from '../spinner/spinner';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const setActiveCardId = useState(0)[1];
  const isFilmsLoaded = useSelector((state: StoreState) => state.isFilmsLoaded);

  if (isFilmsLoaded) {
    return (
      <>
        {films.map((film: Film) => (
          <FilmCard
            key={film.id}
            film={film}
            setActiveCard={setActiveCardId}
          />))}
      </>
    );
  }

  return <Spinner />;
}

export default FilmsList;
