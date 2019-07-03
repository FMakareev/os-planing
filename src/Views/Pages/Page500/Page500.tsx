import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div>
          <div className="justify-content-center">
            <div >
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Houston, we have a problem!</h4>
                <p className="text-muted float-left">
                  The page you are looking for is temporarily unavailable.
                  <br/>
                  <br/>
                  <Link to={'/'}>
                    <button color="info">На главную</button>
                  </Link>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page500;
