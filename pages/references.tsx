import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Layout from "../modules/common/components/Layout";
import theme, { screenSizes, sizes } from "../utils/theme";
import { RepoItem, Repos } from "../modules/reference/Repo";

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

const SectionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`;

const References: FunctionComponent<{}> = () => (
  <Layout>
    <Root>
      <Content>
        <h1>References</h1>
        <SectionTitle>Check out our open source projects</SectionTitle>
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
        <SectionTitle>Our projects</SectionTitle>
        <h3>IoT platform for US startup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
          odio justo, vitae finibus erat ornare eget. Aenean sit amet fringilla
          risus, at viverra dolor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In libero nisl, gravida non velit bibendum, bibendum
          cursus justo. Maecenas vulputate lacus quis lacus egestas, a hendrerit
          magna dictum. Nam fermentum elit non tortor iaculis, tincidunt
          imperdiet magna bibendum. Pellentesque interdum mattis nunc a
          ultrices. Donec ultricies, enim id bibendum sodales, nisl mi
          sollicitudin dolor, vitae bibendum ipsum dolor in enim.
        </p>
        <h3>E-book publisher for US startup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
          odio justo, vitae finibus erat ornare eget. Aenean sit amet fringilla
          risus, at viverra dolor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In libero nisl, gravida non velit bibendum, bibendum
          cursus justo. Maecenas vulputate lacus quis lacus egestas, a hendrerit
          magna dictum. Nam fermentum elit non tortor iaculis, tincidunt
          imperdiet magna bibendum. Pellentesque interdum mattis nunc a
          ultrices. Donec ultricies, enim id bibendum sodales, nisl mi
          sollicitudin dolor, vitae bibendum ipsum dolor in enim.
        </p>
      </Content>
    </Root>
  </Layout>
);

export default References;
