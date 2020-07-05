import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import {withRouter} from "react-router";
export  default class Home extends Component {
  constructor() {
    super ()
  }   
  render () {
      return (
        <div className="Links">
          <NavLink to="/hooksalignment">
            Alignment
          </NavLink>
          <NavLink to="/hideMe">
            HideMe
          </NavLink>
          <NavLink to="/upordown">
            UporDown
          </NavLink>
          <NavLink to="/countpixels">
            CountPixels
          </NavLink>
          <NavLink to="/colorme">
            ColorMe
          </NavLink>
          
        </div>
      );
  }
}
