import React from "react";
import { ITab } from "./type";
import {Layout} from 'antd';
import withChaos from "../../HOC/withChaos";
import withErrorBoundary from "../../HOC/withErrorBoundary";

const {Content} = Layout;
const Tab2 = (props: ITab) => {
  return (
    <Content className="center">
      <h1>Tab2</h1>
    </Content>
  );
};

export default withErrorBoundary(withChaos(Tab2, 6, "tab2 error message"));
//export default withChaos(Tab2, 2, "tab2 error message");
