import React, { useEffect, useState } from "react";
import moment from "moment";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import Button from "../shared/Button";

const GrantsView = () => {
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    setLoading(true);
    const grantsRef = doc(db, "grants", id);
    const unsubscribe = onSnapshot(grantsRef, (doc) => {
      const grant = { ...doc.data(), id: doc.id };
      setGrant(grant);
      setLoading(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='grants'>
      <Container>
        <h1 className='my-3 text-capitalize'>{grant?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: grant?.body }} />
        <div className='mt-3 '>
          <Deadline className='p-1 rounded text-capitalize'>
            application deadline
          </Deadline>

          <p className='mt-2'>
            {moment(grant?.deadline).format("MMM Do YYYY")}
          </p>
          {new Date().getTime() > new Date(grant?.deadline).getTime() ? (
            <h6 className='p-1 rounded'>
              This grant has expired, we are no longer accepting applications.
            </h6>
          ) : null}
        </div>
        <div className='text-center mt-5'>
          {new Date().getTime() < new Date(grant?.deadline).getTime() && (
            <Link to={`/application?${id}`}>
              <Button
                title='apply now'
                primary
                disabled={
                  new Date().getTime() > new Date(grant?.deadline).getTime()
                }
              />
            </Link>
          )}
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  color: ${colors.textColor};
`;

const Deadline = styled.span`
  color: ${colors.white};
  background-color: ${colors.overlay};
`;
export default GrantsView;
