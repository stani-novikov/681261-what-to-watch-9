import './tab.css';
import {TabName} from '../../types/tabs';

type TabProps = {
  children: TabName;
  onClick: (tabName: TabName) => void;
  isActive: boolean;
}

function Tab(props: TabProps):JSX.Element {
  const {children, onClick, isActive} = props;
  const className = `film-nav__item ${isActive ? 'film-nav__item--active' : ''}`;

  return (
    <li className={className} onClick={() => {onClick(children);}}>
      <span className="film-nav__link">{children}</span>
    </li>
  );
}

export default Tab;
