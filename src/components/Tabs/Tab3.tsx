import React from "react";
import { ITab } from "./type";
import {Layout} from 'antd';
import withChaos from "../../HOC/withChaos";
import withErrorBoundary from "../../HOC/withErrorBoundary";

const {Content} = Layout;

const Tab3 = (props: ITab) => {
  return (
    <Content className="center">
      <h1>Tab3</h1>
    </Content>
  );
};

export default withErrorBoundary(withChaos(Tab3, 9, "tab3 error message"));
// export default withChaos(Tab3, 2, "tab3 error message");

