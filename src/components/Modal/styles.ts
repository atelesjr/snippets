import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  gap: 4px;

  position: relative;

  width: 426px;
  margin: 16px;
  border-radius: 8px;
  border: 4px solid #fff;
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;

  .message {

  }

  .close {
    position: absolute;
    right: 6px;
    top: 6px;

    width: 32px;
    height: 32px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &::before, &::after {
      position: absolute;
      left: 15px;

      content: ' ';
      height: 15px;
      width: 3px;
      background-color: #333;    
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

  }
`
