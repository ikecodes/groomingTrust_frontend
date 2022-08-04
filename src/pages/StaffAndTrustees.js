import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import StaffTrusteeCard from "../components/StaffTrusteeCard";

const StaffAndTrustees = () => {
  // const [active, setActive] = useState("staff");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const membersRef = collection(db, "members");
    // const q = query(membersRef, where("category", "==", `${active}`));
    const q = query(membersRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const members = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setMembers(members);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='our people'>
      <TypeContainer>
        <h6 className='activeClass shadow'>staff & trustees</h6>
        {/* <h6
          className={`${active === "trustee" ? "activeClass" : ""}`}
          onClick={() => setActive("trustee")}
        >
          trustees
        </h6> */}
      </TypeContainer>

      <div className='row'>
        {members.length > 0 &&
          members.map((member) => (
            <StaffTrusteeCard
              key={member.id}
              id={member.id}
              name={member.name}
              position={member.position}
              about={member.about}
              image={member.imageUrl}
              imageRef={member.imageRef}
            />
          ))}
      </div>
    </Layout>
  );
};

const TypeContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.primary};
  text-transform: capitalize;
  color: ${colors.textColor};
  & h6 {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin: 0;
    padding: 0.5rem 0;
    font-weight: 500;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
    &.activeClass {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;

export default StaffAndTrustees;
