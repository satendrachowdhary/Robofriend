import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ haveError: true });
  }

  render() {
    return this.state.haveError ? (
      <h1>OOPs something went wrong!!!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
