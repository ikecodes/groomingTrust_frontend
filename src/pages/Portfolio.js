import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import PortfolioCard from '../components/PortfolioCard';
import Layout from '../layouts/Layout';

const Portfolio = () => {
  // const [active, setActive] = useState('health');
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const portfolioRef = collection(db, 'portfolio');
    const q = query(portfolioRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const portfolios = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPortfolios(portfolios);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='portfolio'>
      {/* <TypeContainer>
        <h6
          className={`${active === 'health' ? 'activeClass' : ''}`}
          onClick={() => setActive('health')}
        >
          health
        </h6>
        <h6
          className={`${active === 'education' ? 'activeClass' : ''}`}
          onClick={() => setActive('education')}
        >
          education
        </h6>
        <h6
          className={`${active === 'investment' ? 'activeClass' : ''}`}
          onClick={() => setActive('investment')}
        >
          investment
        </h6>
      </TypeContainer> */}

      <div className='row'>
        {portfolios.length > 0 &&
          portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              id={portfolio.id}
              title={portfolio.title}
              description={portfolio.description}
              image={portfolio.imageUrl}
              link={portfolio.link}
            />
          ))}
      </div>
    </Layout>
  );
};

// const TypeContainer = styled.div`
//   display: flex;
//   margin-bottom: 3rem;
//   justify-content: space-around;
//   border-bottom: 1px solid ${colors.primary};
//   text-transform: capitalize;
//   color: ${colors.textColor};
//   & h6 {
//     border-top-left-radius: 1rem;
//     border-top-right-radius: 1rem;
//     margin: 0;
//     padding: 0.5rem 0;
//     font-weight: 500;
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//     text-align: center;
//     transition: all 0.3s ease-in;
//     &.activeClass {
//       background-color: ${colors.primary};
//       color: ${colors.white};
//     }
//   }
// `;

export default Portfolio;
