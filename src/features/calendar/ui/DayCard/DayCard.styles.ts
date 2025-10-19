import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// TODO: сделать анимацию через gsap
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DayCardWrapper = styled.div({
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '8px',
  background: 'white',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
  margin: '10px',
  animation: `${slideDown} 0.3s ease`,
});
