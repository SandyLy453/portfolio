import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ShowCase.module.css'

export default function ShowCase() {


    return(
        <div className={styles.container}>
            <div className={styles.tagBox}>
                <div className={styles.tag}>
                    <p>Me</p>
                </div>
                <div className={styles.tag}>
                    <p>UX/UI</p>
                </div>
                <div className={styles.tag}>
                    <p>Graphic</p>
                </div>
                <div className={styles.tag}>
                    <p>Other</p>
                </div>
            </div>
        </div>
    )    
}



