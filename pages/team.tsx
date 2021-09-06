import React from "react";
import styled from "styled-components";

import { screenSizes, sizes } from "../utils/theme";
import Layout from "../features/common/components/Layout";
import { Member } from "../features/landingPage/components/AboutUsSection";
import { TeamSEO } from "../features/blog/components/TEAMSEO";

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

export default function Team() {
  return (
    <Layout>
      <TeamSEO />
      <Root>
        <Content>
          <h1>Meet the team</h1>
          <TeamMembers>
            <Member
              src="viktor"
              memberName="Viktor Váczi"
              memberRole="co-founder"
              memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
              memberStack="React.js Node.js Firebase"
              cvLink="/cv/viktor"
              linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
              githubLink="https://github.com/ViktorVaczi90"
            />
            <Member
              src="balazs"
              memberName="Balázs Horváth"
              memberRole="co-founder"
              memberWorkArea="Fullstack JS | Microservices | Cloud"
              memberStack="React.js Node.js Go Firebase AWS"
              cvLink="/cv/balazs"
              linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
              githubLink="https://github.com/horvath-balazs"
            />
            <Member
              src="matejcsok"
              memberName="István Matejcsók"
              memberRole="developer"
              memberWorkArea="Fullstack JS | UI"
              memberStack="React.js Node.js Firebase CSS"
            />
            <Member
              src="aron"
              memberName="Áron Horváth"
              memberRole="visionary & chief designer"
              memberWorkArea="Java | Fullstack JS | UI"
              memberStack="Java React.js Node.js Firebase CSS"
            />
            <Member
              src="ldavid"
              memberName="Dávid Lázár"
              memberRole="developer"
              memberStack="Fullstack JS"
              memberWorkArea="React.js Node.js"
            />
            <Member
              src="zsombor"
              memberName="Kele Zsombor"
              memberRole="developer"
              memberStack="Fullstack JS"
              memberWorkArea="ProseMirror React.js Node.js"
            />
          </TeamMembers>
        </Content>
      </Root>
    </Layout>
  );
}
