import {Link} from 'react-router-dom';

type TabProps = {
  children: string;
  setActiveTab: (text: string) => void;
  activeTab: string;
}

function Tab(props: TabProps):JSX.Element {
  const {children, setActiveTab, activeTab} = props;

  const isActive = () => {
    if (activeTab === children) {
      return 'film-nav__item--active';
    }
    return '';
  };

  return (
    <li className={`film-nav__item ${isActive()}`} onClick={() => {setActiveTab(children);}}>
      <Link to="#" className="film-nav__link">{children}</Link>
    </li>
  );
}

export default Tab;
