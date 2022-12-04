import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }
`;
