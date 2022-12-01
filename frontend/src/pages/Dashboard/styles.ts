import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  overflow: hidden;

  background-color: var(--light-green);

  & > section {
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: var(--dark-purple);
    overflow: hidden;

    & > header {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 1rem;

      padding: 1rem 1rem;
      margin-bottom: 0.5rem;

      box-shadow: 0 4px 4px #00000050;

      background-color: var(--medium-purple);

      & > img {
        height: 2rem;
      }
    }
  }
`;

export const BoxUser = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: var(--dark-purple);

  margin-bottom: 1rem;

  & > section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    padding: 1rem 1rem;

    box-shadow: 0 4px 4px #00000050;

    background-color: var(--dark-purple);

    & > section {
      display: flex;
      gap: 2rem;
      align-items: center;

      & > h2 {
        color: var(--light-green);
      }

      & > svg {
        color: var(--light-green);
        font-size: 16pt;

        cursor: pointer;

        transition: 0.8s;

        :hover {
          color: var(--light-purple);
          transition: 0.8s;
        }
      }

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        & > p {
          border-bottom: 2px solid var(--grey-purple);
        }
      }
    }
  }
`;

export const BoxContacts = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 2rem 1rem;

  color: var(--dark-purple);

  & > section {
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    padding-bottom: 1rem;

    overflow-y: auto;
  }
`;
