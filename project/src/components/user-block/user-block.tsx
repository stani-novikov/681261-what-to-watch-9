import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { StoreState } from '../../store/reducer';

function UserBlock(): JSX.Element {
  const authorizationStatus = useSelector((state: StoreState) => state.authorizationStatus);
  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </> :
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.SignIn} > Sign in </Link>
          </li>
      }
    </ul>
  );
}

export default UserBlock;
