import styled from "styled-components";
import { elevation, setFlex } from "../utils/styles";

export const Input = styled.input.attrs((props) => ({
  type: props.type || "text", // default to 'text' if no type is provided
  placeholder: props.placeholder, // placeholder can be set via props
}))`
  padding: ${(props) => props.padding || "15px 20px"};
  border-radius: ${(props) => props.borderRadius || "50px"};
  border: ${(props) => props.border || "none"};
  outline: none;
  width: ${(props) => props.width || "280px"};
  height: ${(props) => props.height || "50px"};
  background-color: ${(props) => props.backgroundColor || "#E0E5EC"};
  ${(props) => props.elevation && elevation[props.elevation]};
  ${(props) =>
    setFlex({
      justifyContent: props.justifyContent || "center",
      alignItems: props.alignItems || "center",
    })};
  &:focus {
    ${(props) => props.focusElevation && elevation[props.focusElevation]};
  }
`;
