import Tab from './tab';
import {TabName} from '../../types/tabs';

type TabsBarProps = {
  activeTab: string;
  onChangeTab: (tabName: TabName) => void;
}

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
              onClick={onChangeTab}
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
