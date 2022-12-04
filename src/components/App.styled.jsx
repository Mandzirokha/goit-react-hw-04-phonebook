import styled from '@emotion/styled';

export const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #ffb6b9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 25px 40px;
`;

export const LeftContainer = styled.div`
  padding: 25px 40px;
`;

export const Title = styled.h2`
  text-align: center;
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;

  :after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 100px;
    border-radius: 2px;
    background-color: #61c0bf;
  }
`;
