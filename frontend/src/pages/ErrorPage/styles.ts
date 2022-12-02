import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  padding-top: 2rem;

  overflow: hidden auto;

  & > img {
    width: 20vw;
  }

  & > h2 {
    width: 80vw;
    font-size: 20pt;

    text-align: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    & > span {
      width: 85vw;
      font-size: 12pt;

      text-align: center;

      & > a {
        font-size: 16pt;
        font-weight: bold;

        text-decoration: none;

        color: var(--medium-purple);

        cursor: pointer;

        :hover {
          transition: 0.6s;

          color: var(--light-green);
        }
      }
    }

    & > p {
      width: 85vw;

      font-size: 18pt;
      font-weight: bold;

      text-align: center;

      color: var(--medium-purple);

      cursor: pointer;

      :hover {
        transition: 0.6s;

        color: var(--light-green);
      }
    }
  }
`;
