import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  border: 2px solid var(--dark-purple);
  border-radius: 0.8rem;

  box-shadow: 0 3px 5px #00000080;

  padding-bottom: 0.5rem;

  background-color: var(--grey-purple);

  overflow: hidden;
`;

export const BoxName = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  box-shadow: 0 2px 3px #00000080;

  background-color: var(--dark-purple);
  color: var(--light-green);
`;

export const BoxInfo = styled.div`
  width: 35rem;

  display: flex;
  justify-content: space-between;

  padding: 0 0.5rem;

  font-size: 10pt;

  color: var(--dark-purple);
`;

export const BoxPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BoxEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & > svg {
    font-size: 12pt;

    cursor: pointer;

    transition: 0.8s;

    :hover {
      color: var(--light-green);

      transition: 0.8s;
    }
  }
`;
