import { createGlobalStyle } from 'styled-components';

// Global styles using styled-components createGlobalStyle
export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Import Poppins font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  /* Root and body styles */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    font-weight: ${({ theme }) => theme.fonts.weights.normal};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${({ theme }) => theme.transitions.medium};
  }

  /* Link styles */
  a {
    color: ${({ theme }) => theme.colors.primary.teal};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.darkBlue};
      text-decoration: underline;
    }
  }

  /* Button base styles */
  button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.teal};
      outline-offset: 2px;
    }
  }

  /* Input base styles */
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 4px;
    padding: ${({ theme }) => theme.spacing.sm};
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.teal};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.teal}20;
    }
  }

  /* Heading styles */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.accent};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }

  h6 {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }

  /* Paragraph styles */
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  /* List styles */
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Smooth theme transitions for all elements */
  * {
    transition: background-color ${({ theme }) => theme.transitions.medium},
                color ${({ theme }) => theme.transitions.medium},
                border-color ${({ theme }) => theme.transitions.medium};
  }

  /* Utility classes */
  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl};
    margin-inline: auto;
    padding-inline: ${({ theme }) => theme.spacing.md};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Responsive design helpers */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    html {
      font-size: 14px;
    }
    
    .container {
      padding-inline: ${({ theme }) => theme.spacing.sm};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .container {
      padding-inline: ${({ theme }) => theme.spacing.lg};
    }
  }
`;