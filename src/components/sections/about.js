import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;
  margin-top: 70px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 30px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  //text-align: justify;

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    //margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--highlight-blue);
        font-size: var(--fz-md);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  align-items: right;
  max-width: 350px;
  margin-left: 70px;

  @media (max-width: 768px) {
    margin: 20px auto 40px;
    width: 80%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--very-light);
    
    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    // &:before,
    // &:after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   border-radius: var(--border-radius);
    //   transition: var(--transition);
    // }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--slate);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--slate);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Java ', 'JavaScript', 'React', 'AWS', 'Python', 'Kubernetes'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello! My name is Snehitha Kodali. I'm a Computer Science graduate student specializing in Software Development and Intelligent Systems, graduating in May 2023.            </p>

            <p>
             My professional experience includes working as a Software Development Engineer Intern at Amazon.com and as a Full Stack Developer at Cognizant Technology Solutions.
            </p>

            <p>
            In addition to my professional experience, I have also worked on several independent and academic projects such as a Diabetes Monitoring Application and a Smart Bike Sharing System. 
            </p>

            <p>
            Outside of work and school, I have also been involved in social justice leadership as a core member of the Social Justice Peer Educators program, leading focus groups on topics like Diversity, Equity, and Inclusion.
            </p>

            <p>
            I'm excited to take on a challenging software engineering role where I can continue to learn and grow.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>

          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/logome.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
        
      </div>
    </StyledAboutSection>
  );
};

export default About;
