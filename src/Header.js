import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              <a class="navbar-brand" href="">
                MapIt
              </a>
            </div>

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav">
                <li>
                  <a href="">Map</a>
                </li>
                <li>
                  <a href="">Favorites</a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Username <span class="caret" />
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="">Profile</a>
                    </li>
                    <li>
                      <a href="">Edit Account</a>
                    </li>
                    <li>
                      <a href="">Update Password</a>
                    </li>
                    <li class="divider" />
                    <li>
                      <a href="">Logout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Sign Up</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
