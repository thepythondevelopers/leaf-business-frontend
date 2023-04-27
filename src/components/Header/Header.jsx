import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (

  <header id="header" class="header d-flex align-items-center">
  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="index.html" class="logo d-flex align-items-center">
      <img src="assets/img/logo.svg" alt=""/>
    </a>
    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Benifits</a></li>
        <li><a class="trial" href="#">Promote your business</a></li>
        <li><Link to="signup">Sign up</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </nav>
    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  </div>
</header>

  )
}
