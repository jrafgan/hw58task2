import React, {Fragment} from 'react';
import './Button.css';

const Button = props => (props.dismiss ? <Fragment>
        <img onClick={props.onClick} className='Button' alt='btn' src={props.imgUrl}/>
    </Fragment> : null
);

export default Button;