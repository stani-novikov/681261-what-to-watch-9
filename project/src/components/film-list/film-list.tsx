import {Film, Films} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Films
}

function FilmList({films}: FilmListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState(0);

  // eslint-disable-next-line no-console
  console.log(activeCardId);

  return (
    <>
      {films.map((film: Film) => (
        <FilmCard
          key={film.id}
          name={film.name}
          previewImage={film.previewImage}
          id={film.id}
          hoverHandler={setActiveCardId}
        />))}
    </>
  );
}

export default FilmList;
