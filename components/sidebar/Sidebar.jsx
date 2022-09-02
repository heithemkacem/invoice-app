import React from "react";

const Sidebar = () => {
  return (
    //create a sidebar component
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <h2>INV</h2>
          </div>
        </div>
        <div className="sidebar__bottom">
          <img src="./ava.png " alt="avatar" width="100" height="100" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
