import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Index extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div>
          <div className="justify-content-center">
            <div>
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You're lost.</h4>
                <p className="text-muted float-left">
                  Страница, которую вы ищете, не найдена.
                  <br/>
                  <br/>
                  <Link to={'/'}>
                    <button color="info">На главную</button>
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
