import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';


const StyledContactSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--color-black);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--green);
  }

  .email-link {
    // ${({ theme }) => theme.mixins.bigButton};
    // margin-top: 30px;
  }

  .social-list {
    display: block;
    flex-direction: horizontal;
    align-items: center;
    margin: 10px;
    padding: 0;
    list-style: none;
    li {
      display: inline;
      a {
        padding: 10px;
        &:hover,
        &:focus {
          transform: translateY(-3px);
        }
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
    }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">Contact</h2>
      <h2 className="title">Email</h2>
      <a className="email-link" href={`mailto:${email}`}>
        ksnehitha30@gmail.com 
      </a>
      
      <div className='social-list'>{socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </div>
    </StyledContactSection>
  );
};

export default Contact;
