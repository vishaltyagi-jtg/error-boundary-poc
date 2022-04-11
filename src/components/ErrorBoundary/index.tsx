import * as React from "react";
import { getErrorParser } from "../../services/fault.service";
import Fallback from "../Fallback";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  message?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
    error: null,
    message: undefined,
  };

  componentDidCatch(err: Error, info: any) {
    const errorObject = getErrorParser(err);
    this.setState({
      hasError: true,
      error: err,
      message: errorObject.message,
    });
  }

  render() {
    const { error, message } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return fallback || <Fallback message={message}/>;
    }

    return children;
  }
}

export default ErrorBoundary;
