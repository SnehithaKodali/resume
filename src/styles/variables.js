import { css } from 'styled-components';

const variables = css`
  :root {
    --background-gray: #f2f5f7;
    --some-grey: #c2c1db;
    --another-grey: #9795d4;
    --very-light: #dbdbed;
    --highlight-blue: #565594;
    --highlight-lightblue: #7b88a8;
    --back-white: #ffffff
    --colors-accent-1-dark: #cfd2d4;
    --dark-navy: #020c1b;
    --navy: #f2f5f7;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #191d26;
    --light-slate: #191d26;
    --lightest-slate: #565594;
    --white: #e6f1ff;
    --green: #565594;
    --green-tint: #565594;
    --pink: #f57dff;
    --blue: #57cbff;
    --black: #000000;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-primary: "Nunito Sans",sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 50px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
