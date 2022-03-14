import {Dispatch, SetStateAction} from 'react';
import './tab.css';

type TabProps = {
  children: TabName;
  setActiveTab: Dispatch<SetStateAction<TabName>>;
  isActive: boolean;
}
type TabName = 'Overview' | 'Details' | 'Reviews';

function Tab(props: TabProps):JSX.Element {
  const {children, setActiveTab, isActive} = props;
  const className = `film-nav__item ${isActive ? 'film-nav__item--active' : ''}`;

  return (
    <li className={className} onClick={() => {setActiveTab(children);}}>
      <span className="film-nav__link">{children}</span>
    </li>
  );
}

export default Tab;
