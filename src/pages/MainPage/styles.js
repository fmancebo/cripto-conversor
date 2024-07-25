import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray800};

  header {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 425px;
  /* margin: auto; */
  /* height: 90%; */
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray800};

  input {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding-left: 7px;
    line-height: 4rem;
    border: none;
    outline: none;
    font-size: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.champagne};
    color: ${({ theme }) => theme.colors.gray800};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin-top: 30px;
    }
    /* Para Firefox */
    -moz-appearance: textfield;

    &::placeholder {
      font-style: italic;
    }
  }
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 2rem;
  width: 75%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray800};
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(200%);
  }
`;

export const Span = styled.span`
  height: auto;
  width: auto;
  display: flex;
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 1.3rem;
  font-weight: bold;
`;
