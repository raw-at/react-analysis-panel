import React from 'react';
import './Navbar.css';
import {Route,Link} from 'react-router-dom';
import Person from '../Person/Person'

const navbar  = (props) => {
  return (
    <div>
<header>
    <nav class="navbar navbar-default">
<div class="container-fluid">
  <div class="navbar-header">
    <a href="#" class="navbar-brand">StressGO</a>
  </div>
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">Stress Stats</a></li>
    <li><Link to="/solution">Solution</Link></li>
  </ul>
</div>
</nav>
</header>

                <Route path="/solution" exact component={Person} />

</div>  );
}

export default navbar
