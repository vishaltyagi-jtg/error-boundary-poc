import React, {useState} from "react";
import { Tabs } from "antd";
import * as Tab from "../Tabs";
const { TabPane } = Tabs;

const Content = () => {
 const [currentTab, setCurrentTab] = useState('1');

  const handleTabChange = (currentTabKey: string) => {
    setCurrentTab(currentTabKey);
  }

  const tabContent : {[key: string]: JSX.Element} = {
    '1': <Tab.Tab1 currentTab={currentTab} />,
    '2': <Tab.Tab2 currentTab={currentTab} />,
    '3': <Tab.Tab3 currentTab={currentTab} />

  }

  return (
    <>
    <div>
      <Tabs
        defaultActiveKey="1"
        size="large"
        className="tab"
        tabBarGutter={48}
        tabBarStyle={{
          padding: "0 16px",
          border: "1px 0",
          borderColor: "yellow"
        }}
        onChange={handleTabChange}
      >
        <TabPane tab="Tab 1" key="1" />
        <TabPane tab="Tab 2" key="2" />
        <TabPane tab="Tab 3" key="3" />
      </Tabs>
    </div>
    {tabContent[currentTab]}
    </>
  );
};

export default Content;
