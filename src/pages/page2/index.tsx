import { Button } from "antd";
import React, { useState } from "react";
import { showToast } from "../../helpers/toasts";
import withErrorBoundary from "../../HOC/withErrorBoundary";
import { getErrorParser } from "../../services/fault.service";
import './style.css';

function PageTwo() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
      try{
      if(count >= 5){
          throw new Error(`permission-denied`);
      }
      setCount(count+1);
    }
    catch(error: any){
        console.error(error);
        const errorObject = getErrorParser(error);
        showToast('error', errorObject.message.replaceText('You', 'more than 5 increment'), 'Permission Error')
    }
  }
  return (
    <div>
      <div className="center button-wrapper">
        <Button onClick={handleClick}>You clicked this Button {count} times</Button>
      </div>
    </div>
  );
}

// export default withErrorBoundary(PageTwo);
export default PageTwo;
