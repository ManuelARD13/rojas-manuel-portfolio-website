import React from 'react';
import styles from "styles/Header.module.css";
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <section className={`${styles.header} container-fluid`}>
      <div className="header-col col-12 col-md-6 d-flex flex-column justify-content-center">
        <h1 className={styles.headerTitle}>
          ROJAS
          <br />
          Manuel
        </h1>
        <h2>Front-end Engineer</h2>
        <Button variant="primary" size='lg' className='button-1'>Watch Out!</Button>
      </div>
      <div className="row">
        <div className="header-col col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className={styles.backgroundSquare}></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
