import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in-page';
import MyList from '../../pages/my-list/my-list-page';
import Film from '../../pages/film/film-page';
import Player from '../../pages/player/player-page';
import AddReviewPage from '../../pages/add-review/add-review-page';
import NotFoundPage from '../../pages/404/404-page';
import MainPage from '../../pages/main-page/main-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage title={title} genre={genre} year={year} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={<Film/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={`${<AddReviewPage/>}/:id/review`}
        />
        <Route
          path={AppRoute.Player}
          element={`${<Player/>}/:id`}
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
