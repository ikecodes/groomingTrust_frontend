import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import colors from "../constants/colors";
import Section from "../layouts/Section";
import EventsCard from "./EventsCard";

const Events = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setArticles(articles);
    });
    return () => unsubscribe();
  }, []);
  if (!articles.length) return null;
  return (
    <Section>
      <div className='container'>
        <Header className='my-3'>recent updates</Header>
        <div className='row'>
          {articles.length > 0 &&
            articles
              .slice(0, 3)
              .map((article) => (
                <EventsCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  slug={article.slug}
                  description={article.description}
                  createdAt={article.createdAt}
                  image={article.imageUrl}
                  author={article.author}
                />
              ))}
        </div>
      </div>
    </Section>
  );
};

const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;
export default Events;
