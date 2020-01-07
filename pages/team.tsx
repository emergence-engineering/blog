import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Layout from "../modules/common/components/Layout";
import { screenSizes, sizes } from "../utils/theme";
import { Member } from "../modules/landingPage/components/AboutUsSection";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ecd2d20d;
  padding: 2rem ${sizes.sidePadding};
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${screenSizes.medium}px;
`;

const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: ${screenSizes.medium}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Team: FunctionComponent<{}> = () => (
  <Layout>
    <Root>
      <Content>
        <h1>Meet the team</h1>
        <TeamMembers>
          <Member
            src="/bio/viktor.png"
            memberName="Viktor Váczi"
            memberRole="co-founder"
            memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
            memberStack="React.js Node.js Firebase"
            cvLink="/cv/viktor"
            linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
            githubLink="https://github.com/ViktorVaczi90"
          />
          <Member
            src="/bio/balazs.jpg"
            memberName="Balázs Horváth"
            memberRole="co-founder"
            memberWorkArea="Fullstack JS | Microservices | Cloud"
            memberStack="React.js Node.js Go Firebase AWS"
            cvLink="/cv/balazs"
            linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
            githubLink="https://github.com/horvath-balazs"
          />
          <Member
            src="/bio/viktor.png"
            memberName="Viktor Váczi"
            memberRole="co-founder"
            memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
            memberStack="React.js Node.js Firebase"
            cvLink="/cv/viktor"
            linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
            githubLink="https://github.com/ViktorVaczi90"
          />
          <Member
            src="/bio/balazs.jpg"
            memberName="Balázs Horváth"
            memberRole="co-founder"
            memberWorkArea="Fullstack JS | Microservices | Cloud"
            memberStack="React.js Node.js Go Firebase AWS"
            cvLink="/cv/balazs"
            linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
            githubLink="https://github.com/horvath-balazs"
          />
        </TeamMembers>
      </Content>
    </Root>
  </Layout>
);

export default Team;
