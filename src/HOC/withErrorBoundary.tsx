import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const withErrorBoundary = (Component: any, fallback?: any) => {
  return (props: any) => {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default withErrorBoundary;
