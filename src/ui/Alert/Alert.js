import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Alert.css';
import Button from "../Button/Button";
import imgUrl from "../assets/Ico_close.png"


const Alert = props => {
    return (
        <Fragment>
            <Backdrop onClick={props.onClick} show={props.show}/>
            <div onClick={props.type === 'danger' ? props.onClick : null}
                className={['Alert', props.type].join(' ')}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className={props.type}>This is a {props.type} type Alert</div>
                {props.type !== 'danger' ? <Button onClick={props.onClick} dismiss={props.dismiss} imgUrl={imgUrl}/> : console.log(props.type)}
            </div>
        </Fragment>
    );
};

export default Alert;