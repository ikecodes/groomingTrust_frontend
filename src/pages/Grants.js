import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

import styled from "styled-components";
import GrantsCard from "../components/GrantsCard";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";

const Grants = () => {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const grantsRef = collection(db, "grants");
    const q = query(grantsRef, orderBy("createdAt", "desc"));
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
          As stated in our objectives, Grooming Endowment Trust creates value
          and promotes impact through various grant programs made available to
          the public.
        </p>
        <div>
          {grants.length > 0 &&
            grants.map((grant) => (
              <GrantsCard
                key={grant.id}
                id={grant.id}
                slug={grant.slug}
                title={grant.title}
                image={grant.imageUrl}
                description={grant.description}
                imageRef={grant.imageRef}
              />
            ))}
        </div>
        <h4 className='text-capitalize my-3'>Strict Adherence of Rule</h4>
        <p>
          Please note that any fraudulent applications and non-existent business
          applications would be automatically flagged and disqualified from
          applying for any other grant. Please be sure to read all requirements
          for each grant before applications are made.
        </p>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;
export default Grants;
