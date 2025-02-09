import React from "react";
import styles from './Querypopup.module.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popup = props => {
    return (
        <div className={styles.popup}>
            <div className={styles.box}>
                <h2>QUERY</h2>
                <span className={styles.closeicon} onClick={props.handleClose}><FontAwesomeIcon icon={faTimes} size="lg" /></span>
                <form action="" className={styles.queryform}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="Name" id="name" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="email" placeholder="Email Id" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="Message" id="message" cols="54" rows="4" placeholder="Your Query Here....."></textarea>
                    </div>
                    <div className={styles.sendbtn}>
                        <button>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;