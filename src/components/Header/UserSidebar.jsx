import React from 'react'

export default function UserSidebar() {
  return (
    <ul className="pt-4 px-3 navbar-nav bg-white sidebar-light sidebar accordion" id="accordionSidebar">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="users.html">
            <i className="fas fa-fw fa-user-alt"></i>
            <span>Activity</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="plans.html">
            <i className="fas fa-fw fa-list-alt"></i>
            <span>Business Profile</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="notifications.html">
            <i className="fas fas fa-bell fa-fw"></i>
            <span>Events</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Offers</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Collections</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Billing</span></a>
        </li>
        <hr style={{borderTop: '1px solid #ddd' , width: '100%'}} />
        <li className="nav-item no-bg">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Settings</span></a>
        </li>
  
      </ul>
  )
}
