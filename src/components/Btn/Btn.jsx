import React from 'react';

import {Link} from "react-router-dom";


const Btn = (props) => {
    return (
        <React.Fragment>
         
            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-light btn-hover-primary">{props.name}</Link>
        </React.Fragment>
    )
}

export default Btn
