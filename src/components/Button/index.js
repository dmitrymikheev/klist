import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 2px solid ${COLORS.main};
  border-radius: 4px;
  color: ${COLORS.grey33};
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  transition: 0.1s ease-in-out;
`;

export default Button;
