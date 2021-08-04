import React from 'react';
import reactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

function Modal(props) {
    return (
        <>
            {reactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
            {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    );
}

export default Modal;
