import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Layout from "../../modules/common/components/Layout";
import { screenSizes, sizes } from "../../utils/theme";
import { RepoItem, Repos } from "../../modules/reference/Repo";

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

// const SectionTitle = styled.h2`
//   text-decoration: underline;
//   text-decoration-color: ${theme.color.tertiary};
// `;

const References: FunctionComponent<{}> = () => (
  <Layout>
    <Root>
      <Content>
        <h1>Open source projects</h1>
        <Repos>
          <RepoItem
            faIconName="fab fa-github"
            caption="On GitHub"
            href="https://github.com/emergence-engineering"
          />
          <RepoItem
            faIconName="fab fa-gitlab"
            caption="On GitLab"
            href="https://gitlab.com/emergence-engineering"
          />
        </Repos>
      </Content>
    </Root>
  </Layout>
);

export default References;
