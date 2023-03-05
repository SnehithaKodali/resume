import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';
import sr from '@utils/sr';


const StyledJobsSection = styled.section `
      max-width: 1000px;

      .inner{
        display: flex;

        @media(max-width: 50%){
            display: block;
        }
        @media (min-width: 700px) {
            min-height: 340px;
          }

`;
const StyledInnerDiv = styled.div`
width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    display: inline; 
  }
  .comp{
    color: var(--green);
  }
  .location{
    //color: var(--light-slate);
    // font-style: italic;
    float: right;
    display: inline;
    margin-left: 10px;
    font-size: var(--fz-lg);
}

  .range {
    margin-bottom: 20px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`
const StyledTab = styled.div`
    width: 100%;
    z-index: 3;
    margin-bottom: 30px;
}
`

const Jobs1 = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (true) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

    const data = useStaticQuery(graphql`
    query{
        jobs: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  company
                  location
                  range
                }
                html
              }
            }
          }
    }`
    );
    const jobsData = data.jobsData.edges;
  return (       
    <StyledJobsSection id="jobs" ref={revealContainer}>
        <h2 className="numbered-heading">Work Experience</h2>
        <div className="inner">
            <StyledInnerDiv aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
                {jobsData &&
                    jobsData.map(({ node }, i) => {
                        const {html} = node;
                        const { company, range, location} = node.frontmatter;
                        return (
                        <StyledTab>
                        <h3 className="comp">{company}</h3><span className="location">{location}</span>
                        <p className="range">{range}</p>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                        </StyledTab>     
                        );
                    })}
            </StyledInnerDiv>
        </div>
    </StyledJobsSection>
  );
};

export default Jobs1;


