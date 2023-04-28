import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #81f7f3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #00000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 10%;
  margin: 0 auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #186e79;
    color: #fff;
  }

  &:disabled {
    background-color: #186e79;
    color: #fff;
    cursor: not-allowed;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
