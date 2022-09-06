import React, { useState } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
const Faqs = () => {
  const [active, setActive] = useState("grooming");
  const [loading, setloading] = useState(true);

  const questions = [
    {
      q: "Is Grooming Endowment Trust an NGO?",
      a: "Yes, it is an NGO",
      type: "grooming",
    },
    {
      q: "Do grooming Endowment give out loans?",
      a: "No, we do not but you can look out for our grant programs that promote businesses ",
      type: "grooming",
    },
    {
      q: "How do I set a meeting as a fund manager?",
      a: "Please be sure to email us with your proposals and we would respond",
      type: "grooming",
    },
    {
      q: "How much can I get from a grant?",
      a: "Different grant programs have different funding awarded as long as requirements are fulfilled to be awarded. ",
      type: "grants",
    },
    {
      q: "Is there an age limit for the grant? ",
      a: "Depending on the grants awarded, business related grant applicants are usually expected to be 18 and above. ",
      type: "grants",
    },
    {
      q: "How Much Can I Get From A Grant? ",
      a: "Amounts vary according to the grant programs.",
      type: "grants",
    },
  ];
  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <div className='spinner2'></div>;
  return (
    <Layout header='FAQs'>
      <TypeContainer>
        <h6
          className={`shadow ${active === "grooming" ? "activeClass" : ""}`}
          onClick={() => setActive("grooming")}
        >
          about grooming endowment trust
        </h6>
        <h6
          className={`shadow ${active === "grants" ? "activeClass" : ""}`}
          onClick={() => setActive("grants")}
        >
          about grant application
        </h6>
      </TypeContainer>
      <FAQContainer>
        {questions
          .filter((question) => question.type === active)
          .map((question) => (
            <div className='mb-5 border-bottom' key={question.q}>
              <h5 className='text-capitalize'>{question.q}</h5>
              <p>{question.a}</p>
            </div>
          ))}
      </FAQContainer>
    </Layout>
  );
};

const FAQContainer = styled.div`
  color: ${colors.textColor};
`;
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
export default Faqs;
