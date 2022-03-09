import Tab from './tab';

type TapBarProps = {
  activeTab: string;
  onChangeTab: (currentTab: string) => void;
}

const TABS = ['Overview', 'Details', 'Reviews'];

function  TabsBar(props: TapBarProps):JSX.Element {
  const {activeTab, onChangeTab} = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {TABS.map((tab) =>
          (
            <Tab
              key={tab}
              setActiveTab={onChangeTab}
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
