import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import foodImage from '../../assets/ice.jpg';
import styles from './Header.module.css';

function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>IcyWish</h1>
                <HeaderCartButton onClick={props.onShowCartHandler} />
            </header>
            <div className={styles['main-image']}>
                <img src={foodImage} alt='Shawarma' />
            </div>
        </>
    );
}

export default Header;
