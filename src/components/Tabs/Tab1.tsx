import { useEffect } from "react";
import { Layout } from "antd";
import {ITab} from './type';
import withChaos from "../../HOC/withChaos";
import withErrorBoundary from "../../HOC/withErrorBoundary";


const { Content } = Layout;

const Tab1 = (props: ITab) => {
  const {currentTab} = props;
  return (
    <Content className="center">
      <h1>Tab1</h1>
    </Content>
  );
};

 export default withErrorBoundary(withChaos(Tab1, 2, "tab1 error message"));
//export default withChaos(Tab1, 2, "tab1 error message");
