import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & > fieldset {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }

  & > button {
    margin-top: 1rem;
  }
`;
