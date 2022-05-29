import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { programmes } from "../constants/programmes";
import { Link } from "react-router-dom";

const ProgramAreas = () => {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <Layout header='programme areas'>
      {programmes.map((program) => (
        <Section key={program.id}>
          <div
            className={`row justify-content-center align-items-center ${
              program.slug === "education" ||
              program.slug === "enterprise-and-community-development"
                ? "flex-md-row-reverse"
                : ""
            }`}
          >
            <div className='col-lg-4  mb-4'>
              <IconContainer className='h-100 p-5'>
                {program.icon}
                <h4 className='text-capitalize fw-bold'>{program.name}</h4>
              </IconContainer>
            </div>
            <div className='col-lg-8'>
              <p className='p-0 m-0'>{program.description}</p>
              {grants.filter((grant) => grant.programSlug === program.slug)
                .length > 0 && (
                <p className='m-0 p-0'>
                  Our current grants for {program.name}:{" "}
                </p>
              )}
              {grants.filter((grant) => grant.programSlug === program.slug)
                .length > 0 && (
                <List>
                  {grants
                    .filter((grant) => grant.programSlug === program.slug)
                    .map((grant) => (
                      <li key={grant?.id}>
                        <Link to={`/grants/${grant?.slug}`} state={grant?.id}>
                          {grant?.title}
                        </Link>
                      </li>
                    ))}
                </List>
              )}
            </div>
          </div>
        </Section>
      ))}
    </Layout>
  );
};

const IconContainer = styled.div`
  background-color: ${colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2.5rem;
  align-items: center;
  text-align: center;
  & h4 {
    color: ${colors.secondary};
  }
`;

const List = styled.ul`
  list-style: circle;
  & a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${colors.primary};
  }
`;

export default ProgramAreas;
