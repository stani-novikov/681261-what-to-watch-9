import Tab from './tab';
import {Dispatch, SetStateAction} from 'react';

type TabsBarProps = {
  activeTab: string;
  onChangeTab: Dispatch<SetStateAction<TabName>>;
}
type TabName = 'Overview' | 'Details' | 'Reviews';

const TABS:TabName[] = ['Overview', 'Details', 'Reviews'];

function  TabsBar(props: TabsBarProps):JSX.Element {
  const {activeTab, onChangeTab} = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {TABS.map((tab) =>
          (
            <Tab
              key={tab}
              setActiveTab={onChangeTab}
              isActive={activeTab === tab}
            >
              {tab}
            </Tab>),
        )}
      </ul>
    </nav>
  );
}

export default TabsBar;
