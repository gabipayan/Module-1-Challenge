import styled from "styled-components";
import { elevation, salmon, teal, above, below } from '../utils/styles'

// export const Button = styled.button`
//   background-color: ${(props) => (props.$primary ? "#00ed8e" : "gray")};
//   color: ${({ $primary }) => ($primary ? "black" : "white")};
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 10px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

export const Button = styled.button`
  padding: ${props => props.size === 'sm' ? '3px 10px' : '5px 40px'};
  border-radius: 4px;
  color: white;
  ${elevation[3]};
  font-size: ${props => props.size === 'sm' ? '1rem' : '2rem'};
  border: none;
  background: ${props => props.type === 'cancel' ? salmon : teal};

  ${above.sm`
    color: red;
  `}

  ${below.lg`
    color: black;
  `}
`;



export const DangerButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background-color: black;
  }
`;
