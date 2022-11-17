import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html {
    --color-text: ${(props) => props.theme.colors.text};
    --color-background:  ${(props) => props.theme.colors.background};
    --color-primary:  ${(props) => props.theme.colors.primary};

    color: var(--color-text);
    background-color: var(--color-background);

    --breakpoints-mobile: 540px;
    --breakpoints-tablet: 768px;
    --breakpoints-desktop: 1024px;

  }
`;

export default GlobalStyle;
