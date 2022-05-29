import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import NavLg from "../layouts/NavLg";
import NavSm from "../layouts/NavSm";
const Slider = () => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("isFeatured", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setArticles(articles);
      // setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  console.log(articles);
  return (
    <div className='position-relative slider_container'>
      <NavSm />
      <NavLg />
      <Carousel>
        <Carousel.Item className='position-relative' interval={500}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/123/1200/600'
              alt='First slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1 className='text-start'>grooming trust</h1>
              <p className='text-start'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        {articles.length > 0 &&
          articles.map((article) => (
            <Carousel.Item interval={500} key={article?.id}>
              <div className='slider_image_box'>
                <div className='slider_overlay'></div>
                <img
                  className='slider_image'
                  src={article?.imageUrl}
                  alt='Second slide'
                />
              </div>
              <Caption>
                <Carousel.Caption>
                  <h1 className='text-start'>{article?.title}</h1>
                  <p className='text-start'>{article?.description}</p>
                </Carousel.Caption>
              </Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

const Caption = styled.div`
  & h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export default Slider;
