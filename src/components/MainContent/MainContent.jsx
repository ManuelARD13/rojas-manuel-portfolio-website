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
      interval: 3000,
      theme: 'dark',
    },
    {
      title: 'TODO App',
      description: 'Implementing CRUD operations in React.js',
      img: 'img/TODOApp.png',
      link: '#',
      interval: 2000,
      theme: 'light',
    },
    {
      title: 'Weather App',
      description: 'Implementing API consumption and data manipulation in React.js',
      img: 'img/VideoGameDemo.png',
      link: '#',
      interval: 2000,
      theme: 'dark',
    },
    {
      title: 'Portfolio Website',
      description: 'Fully responsive Front-end developer portfolio website',
      img: 'img/portfolio-website.png',
      link: '#',
      interval: 2000,
      theme: '',
    },
  ];

  return (
    <>
      <section id="aboutMe" className={`${styles.aboutMeSection}`}>
        <div className={`${styles.aboutMeContainer} container`}>
          <div className={`${styles.profileContainer} col-12 col-md-6`}>
            <img src="img/profile-picture.jpg" alt="profile-picture" />
          </div>
          <div className={`${styles.aboutTextContainer} col-12 col-md-6 d-flex flex-column align-items-center`}>
            <p>
              I am a dedicated React Front-End Engineer with a passion for crafting seamless, dynamic, and user-friendly web applications. I specialize in leveraging the power of React to build
              captivating user interfaces, harnessing its flexibility to create scalable solutions that captivate and engage users. With a meticulous eye for detail and a strong foundation in
              JavaScript, I thrive on translating complex ideas into elegant, efficient, and high-performance code. Constantly exploring new libraries and staying at the forefront of React
              development, I am committed to pushing the boundaries of what's achievable in web development. Let's collaborate and innovate to create exceptional user experiences!
            </p>
          </div>
        </div>
        <div className={styles.backgroundSquare}></div>
      </section>
      <section id="blurbsSection" className={`${styles.blurbsSection} d-flex flex-column justify-content-center align-items-center`}>
        <h2 className="mt-5">Regularly Implemented Lenguages and Frameworks</h2>
        <p className={`${styles.divider} m-3`}></p>
        <div className={`container-fluid d-flex flex-wrap justify-content-center gap-5 m-4 ${styles.cardsContainer}`}>
          {lenguagesAndFrameworks.map((tech) => (
            <Card className={styles.card} key={tech.title}>
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
        <div className={styles.backgroundSquare2}></div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="mt-5">Professional Development Projects</h2>
        <p className={`${styles.divider} m-3`}></p>
        <div className={`${styles.projectsCarousel} m-4`}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            prevIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#44d6f7" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            }
            nextIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#44d6f7" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            }
          >
            {projects.map((project) => (
              <Carousel.Item className={styles.carouselItem} interval={project.interval} data-bs-theme={project.theme} key={project.title}>
                <img className={styles.slideImgs} src={project.img} alt="" />
                <Carousel.Caption className={styles.carouselCaption}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className={styles.backgroundSquare3}></div>
      </section>
    </>
  );
}

export default MainContent;
