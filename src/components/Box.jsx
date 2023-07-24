import React from 'react';
import styles from "./Box.module.css";
import { useState } from 'react';
import Pap from '../img/Pap.png';
import Rock from '../img/Rock.png';
import Sci from '../img/Sci.png';
import Nothing from '../img/Nothing.png';

const Box = (props) => {

    const imgs = [Nothing, Rock, Sci, Pap]

    return (

        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div><img className={styles.boxImg} src={imgs[props.hand]}/></div>
        </div>
    );
};

export default Box;