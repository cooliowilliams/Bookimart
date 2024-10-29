import React from 'react';
import '../../styles/sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-list">
        <li><a href="/category/electronics" className="sidebar-link">Electronics</a></li>
        <li><a href="/category/fashion" className="sidebar-link">Fashion</a></li>
        <li><a href="/category/home-appliances" className="sidebar-link">Home Appliances</a></li>
        <li><a href="/category/health-beauty" className="sidebar-link">Health & Beauty</a></li>
        <li><a href="/category/sports" className="sidebar-link">Sports</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

