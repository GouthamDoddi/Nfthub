import React, { useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CarouselComponent: React.FC = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div ref={ref}>
      <Carousel
        swipeable={false}
        deviceType="desktop"
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <motion.img
          src="/images/c1.jpeg"
          className="carousalImages"
          alt="Descriptive text"
          variants={carouselVariants}
          animate={controls}
          initial="hidden"
        />
        <motion.img
          src="/images/c2.jpeg"
          className="carousalImages"
          alt="Descriptive text"
          variants={carouselVariants}
          animate={controls}
          initial="hidden"
        />
        <motion.img
          src="/images/c3.jpeg"
          className="carousalImages"
          alt="Descriptive text"
          variants={carouselVariants}
          animate={controls}
          initial="hidden"
        />
        <motion.img
          src="/images/c4.jpeg"
          className="carousalImages"
          alt="Descriptive text"
          variants={carouselVariants}
          animate={controls}
          initial="hidden"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
