import MainPage from '../main-page/main-page';

type MainPageProps = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: MainPageProps): JSX.Element {
  return (
    <MainPage
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
