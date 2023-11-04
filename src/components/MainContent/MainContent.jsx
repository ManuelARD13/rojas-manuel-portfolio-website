import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from 'styles/MainContent.module.css';

function MainContent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const lenguagesAndFrameworks = [
    {
      title: 'Next.js',
      img: 'img/nextjs-logo.png',
      description: 'React framework for efficient server-side rendering and easy deployment.',
      link: '',
    },
    {
      title: 'React.js',
      img: 'img/react-logo.png',
      description: 'A powerful JavaScript library for building dynamic user interfaces',
      link: '',
    },
    {
      title: 'Bootstrap 5',
      img: 'img/bootstrap-logo.png',
      description: 'Leading framework for crafting sleek and quick responsive UIs',
      link: '',
    },
    {
      title: 'GitHub',
      img: 'img/github-logo.png',
      description: 'Top platform and essential hub for collaborative code management.',
      link: '',
    },
    {
      title: 'HTML 5',
      img: 'img/html5-logo.png',
      description: 'Markup language for structuring web content and building web pages.',
      link: '',
    },
    {
      title: 'CSS 3',
      img: 'img/css3-logo.png',
      description: 'Sheet style language for web styling, element design and layout.',
      link: '',
    },
    {
      title: 'JavaScript',
      img: 'img/js-logo.png',
      description: 'Dynamic scripting language able to create interactive user experiences',
      link: '',
    },
    {
      title: 'Git',
      img: 'img/git-logo.png',
      description: 'Leading Version Control System for effective code management.',
      link: '',
    },
  ];

  const projects = [
    {
      title: 'Videogame DEMO',
      description: 'Example of the character creation process in RPG games build in React.js',
      img: 'img/VideoGameDemo.png',
      link: '#',
    },
    {
      title: 'TODO App',
      description: 'Implementing CRUD operations in React.js',
      img: 'img/TODOApp.png',
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'Implementing API consumption and data manipulation in React.js',
      img: 'img/VideoGameDemo.png',
      link: '#',
    },
    {
      title: 'Portfolio',
      description: 'Front-end developer portfolio responsive website',
      img: 'img/portfolio-website.png',
      link: '#',
    },
  ];

  return (
    <>
      <section className={`${styles.blurbsSection} d-flex flex-column justify-content-center align-items-center`}>
        <h2 className='mt-5'>Regularly Implemented Lenguages and Frameworks</h2>
        <p className={`${styles.divider} m-3`}></p>
        <div className={`container-fluid d-flex flex-wrap justify-content-center gap-5 m-4 ${styles.cardsContainer}`}>
          {lenguagesAndFrameworks.map((tech) => (
            <Card className={styles.card}>
              <Card.Img variant="top" src={tech.img} />
              <Card.Body>
                <Card.Title>{tech.title}</Card.Title>
                <Card.Text>{tech.description}</Card.Text>
                <Button href={tech.link} variant="primary">
                  My Experience
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className={styles.backgroundSquare}></div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h2>Professional Developement Projects</h2>
        <div className={styles.projectsCarousel}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {
              projects.map((project) => (
              <Carousel.Item className={styles.carouselItem}>
                <img className={styles.slideImgs} src={project.img} alt="" />
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default MainContent;
