import styled from 'styled-components';

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  outline: 2px solid green;
  width: 100px;
  /* margin-right: 8px; */

  border: 1px solid tomato;
`;

export const Status = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid #a4abb6;
  border-radius: 50%;
  position: absolute;
  left: 18px;
  top: 18px;

  background-color: ${({ status }) => {
    if (status === 'online') {
      return '#56f000';
    } else if (status === 'busy') {
      return '#fce83a';
    } else {
      return '#ff3838';
    }
  }};
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  background-color: gray;
`;
