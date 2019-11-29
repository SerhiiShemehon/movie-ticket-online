import React from 'react';
import { Link } from "react-router-dom";

import { NEWS } from "../../constants";


export class ListNews extends React.Component {

  render() {
    return (
      <div className="box-list">
        {
          NEWS.map( (item, i) => (
            <div className="box-item" key={i}>
              <Link to={item.link}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            </div>
          ))
        }
      </div>
    );
  };
}
