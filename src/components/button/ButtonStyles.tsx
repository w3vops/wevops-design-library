import styled from 'styled-components';
import {ButtonStylesTypes} from "./ButtonStyles.types";

const Button = styled.button<ButtonStylesTypes>`
  padding: 5px 10px;
  background-color: ${({bgColor}) => bgColor};
`;

export default Button;