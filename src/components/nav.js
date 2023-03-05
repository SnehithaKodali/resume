import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
//import { IconLogo } from '@components/icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  display: flex;
  border-radius: 50px;
  top: 20px;
  //margin: 20px;
  z-index: 11;
  //padding: 20px 0 20px 20px;
  width: calc(100% - 20px);
  margin-left: 10px;
  height: 75px;
  background-color: var(--highlight-blue);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  color: var(--white);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: right;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transition: opacity 0.4s ease-in-out;
        transform: translateY(0px);
        background-color: var(--highlight-blue);
        box-shadow: 0 10px 30px -10px var(var(--highlight-blue));
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        // height: var(--nav-scroll-height);
        // transform: translateY(calc(var(--nav-scroll-height) * -1));
        // box-shadow: 0 10px 30px -10px var(--highlight-blue);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: absolute;
  justify-content: center;
  width: 100%;
  margin-right: 20px;
  color: var(--white);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  @media (max-width: 768px) {
    //padding: 0 25px;
    justify-content: right;
  }

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--white);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--white);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-sm);

      a {
        padding: 10px;
        color: var(--white);

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--white);
          font-size: var(--fz-sm);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-sm);
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  // const Logo = (
  //   <div className="logo" tabIndex="-1">
  //     {isHome ? (
  //       <a href="/" aria-label="home">
  //         <IconLogo />
  //       </a>
  //     ) : (
  //       <Link to="/" aria-label="home">
  //         <IconLogo />
  //       </Link>
  //     )}
  //   </div>
  // );

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {/* {Logo} */}

            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
              </ol>
              <div>{ResumeLink}</div>
            </StyledLinks>

            <Menu />
          </>
        ) : (
          <>
            {/* <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup> */}

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
