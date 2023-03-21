import React from "react";
import "./not-found.scss";

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found-wrapper" data-testid="notFound">
        <div className="not-found"></div>
      </div>
    );
  }
}

export { NotFound };
