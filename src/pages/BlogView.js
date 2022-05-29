import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import colors from "../constants/colors";
import Image from "../shared/Image";
const BlogView = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    setLoading(true);
    const articlesRef = doc(db, "articles", id);
    const unsubscribe = onSnapshot(articlesRef, (doc) => {
      const article = { ...doc.data(), id: doc.id };
      setArticle(article);
      setLoading(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='blog'>
      <div className='row justify-content-center mb-3'>
        <div className='col-lg-8'>
          <Image src={article?.imageUrl} h={100} unit='%' />
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-12'>
          <div dangerouslySetInnerHTML={{ __html: article?.body }} />
          <div className='mt-3 text-capitalize '>
            <Deadline className='p-1 rounded'>published</Deadline>
            <p className='mt-2'>
              {new Date(article?.createdAt.seconds * 1000).toLocaleDateString(
                "en-US"
              )}
              <span className='text-capitalize d-block'>
                by {article?.author}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Deadline = styled.span`
  color: ${colors.white};
  background-color: ${colors.overlay};
`;
export default BlogView;
