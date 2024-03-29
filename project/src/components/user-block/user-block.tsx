import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { StoreState } from '../../store/reducer';
import {logoutAction} from '../../store/api-actions';

const DEFAULT_USER_AVATAR = 'img/avatar.jpg';

function UserBlock(): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state: StoreState) => state.authorizationStatus);
  const logoutClickHandler = () => {
    dispatch(logoutAction());
  };
  const userAvatar = localStorage.getItem('user-avatar');
  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={userAvatar ? userAvatar : DEFAULT_USER_AVATAR} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a onClick={logoutClickHandler} className="user-block__link">Sign out</a>
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
