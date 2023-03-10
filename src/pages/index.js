import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, About, Education, Jobs, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      {/* <Hero /> */}
      <About />
      <Jobs />
      <Education />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
