import React from "react";

export default function Project() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translateX(" + this.props.left + "px)",
        animationTimingFunction: "ease-in",
        zIndex: -20,
        transition: "transform .8s ease-in-out",
      }}
    >
      {this.props.children}
    </div>
  );
}
