import { Component, createRef, Fragment } from "react";

const shouldComponentUpdateRef = createRef();

class RenderThrottle extends Component {
  constructor(props) {
    super(props);
    this.constructComponent = this.constructComponent.bind(this);

    shouldComponentUpdateRef.current = true;
  }

  constructComponent() {
    // keep this function from running when component
    // should not update
    if (shouldComponentUpdateRef.current === true) return this.props.children;

    return null;
  }
  //

  shouldComponentUpdate(prev) {
    if (
      typeof prev.trigger === "object" &&
      typeof this.props.trigger === "object"
    ) {
      const keys = Object.keys(this.props.trigger);

      keys.map((key) => {
        if (prev.trigger[key] !== this.props.trigger[key]) {
          shouldComponentUpdateRef.current = true;

          return true;
        }
      });

      return false;
    }

    if (prev.trigger === this.props.trigger) {
      shouldComponentUpdateRef.current = false;

      return false;
    }

    shouldComponentUpdateRef.current = true;
    return true;
  }

  render() {
    return <Fragment>{this.constructComponent()}</Fragment>;
  }
}

export { RenderThrottle };
