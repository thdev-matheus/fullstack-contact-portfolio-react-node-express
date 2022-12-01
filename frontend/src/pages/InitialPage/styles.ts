import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const WhiteBox = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0 15rem 0 0;

  background-color: var(--light-green);

  & > img {
    width: 60%;
  }
`;

export const BlackBox = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      & > span {
        color: var(--grey-purple);

        transition: 0.8s;

        cursor: pointer;

        :hover {
          color: var(--light-green);

          transition: 0.8s;
        }
      }
    }
  }
`;
