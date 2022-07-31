import { Link } from 'gatsby';
import * as React from 'react';

const Card = (props) => {
  return (
    <Link to={props.path} className="card">
      <div className="card-header mb-4">
        <h3 className="card-title">{ props.title }</h3>
        <p className="card-sub-title">{ props.subTitle }</p>
      </div>
      { props.children }
    </Link>
  );
}

export default Card;