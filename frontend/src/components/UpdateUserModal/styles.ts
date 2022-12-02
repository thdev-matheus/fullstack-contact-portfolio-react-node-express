import styled from "styled-components";

export const Container = styled.div`
  width: 100ww;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  background-color: #00000080;
`;

export const FormContainer = styled.div`
  width: 40rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 0.8rem;

  outline: 3px solid var(--white);
  outline-offset: -1.8rem;

  background-color: var(--dark-purple);
  color: var(--white);

  & > svg {
    font-size: 20pt;

    position: relative;
    right: -273px;
    top: -35px;

    cursor: pointer;
  }
`;
