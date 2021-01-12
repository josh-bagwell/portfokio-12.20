import styled from 'styled-components';

export const StyledBurger = styled.button `
position: absolute;
top: 4%;
left: 2rem;
display: none;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
  
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
        display: flex;
}
  @media screen and (max-width: 600px) {
    top: 25px;
    width: 1.75rem;
    height: 1.75rem;
}
  
  div {
    width: 2rem;
    height: 1px;
    background-color: black;
    border-radius: 0;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }

  @media screen and (max-width: 600px) {
    width: 1.75rem;
}
  }
`;