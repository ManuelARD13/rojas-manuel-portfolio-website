import Link from 'next/link';
import React from 'react';

import styles from 'styles/Footer.module.css';

function Footer() {
  const navigation = [
    {
      title: 'HOME',
      link: '#',
    },
    {
      title: 'PROJECTS',
      link: '#',
    },
    {
      title: 'ABOUT ME',
      link: '#',
    },
    {
      title: 'CONTACT',
      link: '#',
    },
  ];

  const projects = [
    {
      title: 'HOME',
      link: '#',
    },
    {
      title: 'PROJECTS',
      link: '#',
    },
    {
      title: 'ABOUT ME',
      link: '#',
    },
    {
      title: 'CONTACT',
      link: '#',
    },
  ];

  const contact = [
    {
      title: 'HOME',
      link: '#',
    },
    {
      title: 'PROJECTS',
      link: '#',
    },
    {
      title: 'ABOUT ME',
      link: '#',
    },
    {
      title: 'CONTACT',
      link: '#',
    },
  ];

  return (
    <footer className={`${styles.footer} d-flex flex-column justify-content-between align-items-center`}>
      <div className={`${styles.columnsContainer} container row row-cols-auto`}>
        <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
          <h5>Navigation</h5>
          <ul className={styles.footerList}>
            {navigation.map((item) => (
              <Link href={item.link}>
                <li key={item.title}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <h5>Projects</h5>
          <ul className={styles.footerList}>{projects.map((item) => (
              <Link href={item.link}>
                <li key={item.title}>{item.title}</li>
              </Link>
            ))}</ul>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <h5>Contact</h5>
          <ul className={styles.footerList}>{contact.map((item) => (
              <Link href={item.link}>
                <li key={item.title}>{item.title}</li>
              </Link>
            ))}</ul>
        </div>
      </div>
      <div className="row">
        <p>© 2023 ROJAS Manuel, Front-end Engineer. All rights reserved. Powered by Next.js.</p>
      </div>
    </footer>
  );
}

export default Footer;
