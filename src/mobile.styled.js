import styled from 'styled-components';

export const StyledMenu = styled.nav `
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;