import React from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../utils/theme";
import Layout from "../features/common/components/Layout";
import {Member, Members} from "../features/landingPage/components/AboutUsSection";
import { TeamSEO } from "../features/blog/components/TEAMSEO";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.background2};
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
                src={Members.ksisu}
                memberName="Kristóf Horváth"
                memberRole="Scala team lead"
                memberWorkArea="Scala | DevOps | Fullstack JS"
                memberStack="Scala Kubernetes React Angular"
                cvLink="/cv/ksisu"
                // linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
                githubLink="https://github.com/Ksisu"
            />
            <Member
                src={Members.torcsi}
                memberName="Gergő Törcsvári"
                memberRole="Scala team lead"
                memberWorkArea="Scala | DevOps | Fullstack JS"
                memberStack="Scala Kubernetes React"
                cvLink="/cv/torcsi"
                // linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
                githubLink="https://github.com/tg44"
            />
            <Member
              src="matejcsok"
              memberName="István Matejcsok"
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
              memberStack="React.js Node.js"
              memberWorkArea="Fullstack JS"
            />
            <Member
              src="csenge"
              memberName="Csenge Sóti"
              memberRole="developer"
              memberStack="Scala Kubernetes React Angular"
              memberWorkArea="Scala | Java | Fullstack JS"
            />
            <Member
                src="norbi"
                memberName="Norbert Aschenbrenner"
                memberRole="developer"
                memberStack="React.js CSS"
                memberWorkArea="Fullstack JS"
            />
            <Member
                src="peter"
                memberName="Péter Maia-Veres"
                memberRole="front-end developer"
                memberStack="React CSS HTML"
                memberWorkArea=""
            />
            <Member
                src="petra"
                memberName="Németh Petra Ráhel"
                memberRole="Office Manager"
                memberStack=""
                memberWorkArea=""
            />
            <Member
                src="kata"
                memberName="Katalin Zsófia Csillag"
                memberRole="front-end developer"
                memberStack="React CSS HTML"
                memberWorkArea=""
            />
          </TeamMembers>
        </Content>
      </Root>
    </Layout>
  );
}
