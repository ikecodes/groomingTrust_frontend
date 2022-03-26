import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import GrantsCard from './GrantsCard';

const Grants = () => {
  const [grants, setGrants] = useState([]);

  useEffect(() => {
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
    });
    return () => unsubscribe();
  }, []);

  if (!grants.length) return null; // Don't return anything is this is no grant
  return (
    <Container>
      <div className='container'>
        <Header className='my-3'>grants</Header>
        {grants.length > 0 &&
          grants.map((grant) => (
            <GrantsCard
              key={grant.id}
              id={grant.id}
              title={grant.title}
              image={grant.imageUrl}
              description={grant.description}
            />
          ))}
      </div>
      <div className='d-flex justify-content-center'>
        <Link to='/grants'>
          <Button title='see more' />
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin: 7rem 0;
  color: ${colors.textColor};
`;

const Header = styled.h1`
  color: ${colors.headerColor};
  text-transform: capitalize;
`;
export default Grants;
