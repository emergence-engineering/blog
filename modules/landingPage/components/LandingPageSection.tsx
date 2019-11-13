import styled from "styled-components";
import React, { FunctionComponent } from "react";

const Description = styled.p`
  font-weight: lighter;
  text-align: justify;
  text-justify: newspaper;
`;

const Container = styled.div``;

const descContent = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const LandingPageSection: FunctionComponent<{}> = () => (
  <Container>
    <h1>Section title</h1>
    <Description>{descContent}</Description>
  </Container>
);

export default LandingPageSection;
