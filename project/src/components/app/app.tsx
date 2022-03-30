import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignIn from '../pages/sign-in-page/sign-in-page';
import MyList from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import Player from '../pages/player-page/player-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import NotFoundPage from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/reducer';

type AppProps = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: AppProps): JSX.Element {
  const films = useSelector((state: StoreState) => state.films);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage title={title} genre={genre} year={year} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage films={films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
