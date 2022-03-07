import Tab from './tab';
import {useState} from 'react';

const TABS = ['Overview', 'Details', 'Reviews'];

function  TabsBar():JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {TABS.map((tab) =>
          (
            <Tab
              key={tab}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            >
              {tab}
            </Tab>),
        )}
      </ul>
    </nav>
  );
}

export default TabsBar;
