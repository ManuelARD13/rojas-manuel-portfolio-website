import React from 'react';
import styles from 'styles/Header.module.css';
import Button from 'react-bootstrap/Button';
import AnimatedLogo from 'common/AnimatedLogo/AnimatedLogo';

function Header() {
  return (
    <section id='home' className={`${styles.header} container-fluid`}>
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className={styles.headerTitle}>
            ROJAS
            <br />
            Manuel
          </h1>
          <h2>Front-end Engineer</h2>
          <Button variant="primary" size="lg" className="button-1">
            Watch Out!
          </Button>
        </div>
        <div className={`${styles.logo} col-md-4`}>
          <AnimatedLogo fillColor='rgba(37, 37, 41)' strokeColor='#ebedfa' />
        </div>
      </div>
      <div className="row">
        <div className="header-col col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className={styles.backgroundSquare}></div>
        </div>
      </div>
      <div className={styles.arrowIcon}>
        <a href="#aboutMe">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#4e4e4e60" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Header;
