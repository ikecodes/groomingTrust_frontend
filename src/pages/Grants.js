import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

import styled from 'styled-components';
import GrantsCard from '../components/GrantsCard';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';

const Grants = () => {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const grantsRef = collection(db, 'grants');
    const q = query(grantsRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const grants = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setGrants(grants);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='grants'>
      <Container>
        <h1 className='text-capitalize my-3'>apply for a grant</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit tempora rerum esse dolore. Aut est sapiente asperiores
          ab aliquam molestias consectetur autem accusantium doloribus dolorum
          vitae tempora cupiditate, dolores quisquam.
        </p>
        <div>
          {grants.length > 0 &&
            grants.map((grant) => (
              <GrantsCard
                key={grant.id}
                id={grant.id}
                title={grant.title}
                deadline={grant.deadline}
                image={grant.imageUrl}
                description={grant.description}
                body={grant.body}
              />
            ))}
        </div>
        <h4 className='text-capitalize my-3'>guidelines for application</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit tempora rerum esse dolore. Aut est sapiente asperiores
          ab aliquam molestias consectetur autem accusantium doloribus dolorum
          vitae tempora cupiditate, dolores quisquam.
        </p>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;
export default Grants;
