import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Layout from "../layouts/Layout";
import AwardeesCard from "../components/AwardeesCard";

const Awardees = () => {
  const [awardees, setAwardees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const awardeesRef = collection(db, "awardees");
    // const q = query(membersRef, where("category", "==", `${active}`));
    const q = query(
      awardeesRef,
      orderBy("createdAt", "desc"),
      where("year", "==", `2022`)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const awardees = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setAwardees(awardees);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='Awardees'>
      <div className='row'>
        {awardees.length > 0 &&
          awardees.map((awardee) => (
            <AwardeesCard
              key={awardee.id}
              id={awardee.id}
              name={awardee.name}
              businessName={awardee.businessName}
              email={awardee.email}
              country={awardee.country}
              sector={awardee.sector}
              year={awardee.year}
              about={awardee.about}
              image={awardee.imageUrl}
              imageRef={awardee.imageRef}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Awardees;
