import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          font-family: "Noto Sans KR", sans-serif;
          font-size: 16px;
          @media screen and (max-width: 1400px) {
            font-size: 12px;
          }

          @media screen and (max-width: 1000px) {
            font-size: 10px;
          }

          @media screen and (max-width: 800px) {
            font-size: 8px;
          }
        }

        a {
          text-decoration: none;
        }

        *,
        *::after,
        *::before {
          color: #495464;
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }

        button {
          font-family: "Noto Sans KR", sans-serif;
        }

        input {
          font-family: "Noto Sans KR", sans-serif;
        }
      `}
    />
  );
};
