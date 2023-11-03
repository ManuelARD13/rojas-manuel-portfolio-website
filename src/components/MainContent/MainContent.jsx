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

  const technologies = [
    {
      title: 'React.js',
      img: 'img/react-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'Next.js',
      img: 'img/nextjs-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'Bootstrap 5',
      img: 'img/bootstrap-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'GitHub',
      img: 'img/github-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'HTML5',
      img: 'img/html5-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'CSS3',
      img: 'img/css3-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'JavaScript',
      img: 'img/js-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
    {
      title: 'Git',
      img: 'img/git-logo.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '',
    },
  ];

  const projects = [
    {
      title: 'Videogame DEMO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'img/VideoGameDemo.png',
      link: '#',
    },
    {
      title: 'TODO App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'img/TODOApp.png',
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'img/VideoGameDemo.png',
      link: '#',
    },
    {
      title: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'img/portfolio-website.png',
      link: '#',
    },
  ];

  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h2>Technologies</h2>
        <div className={`container-fluid d-flex flex-wrap justify-content-center gap-5 ${styles.cardsContainer}`}>
          {technologies.map((technology) => (
            <Card className={styles.card}>
              <Card.Img variant="top" src={technology.img} />
              <Card.Body>
                <Card.Title>{technology.title}</Card.Title>
                <Card.Text>{technology.description}</Card.Text>
                <Button href={technology.link} variant="primary">
                  Know more
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
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
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}

            {/* <Carousel.Item>
              <img className={styles.slideImgs} src="img/svtJbZs.jpg" alt="" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.slideImgs} src="img/svtJbZs.jpg" alt="" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default MainContent;
