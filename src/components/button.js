//styles
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import vars from './varss';

//styled
const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 15px 25px;
  border-radius: 4px;
  font-size: ${vars.rems.f14};
  font-weight: 500;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  line-height: 1;
  color: ${vars.colors.text};
  background-color: #eee;
  min-width: 120px;
  &:hover,
  &:focus,
  &:active {
    background-color: #ddd;
  }
  &:active {
    transform: translateY(1px);
  }
  /* Block */
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  /* Primary */
  ${props => props.primary && css`
    background: ${vars.colors.purple};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.purple)};
    }
  `}
  /* Secondary */
  ${props => props.secondary && css`
    background: ${vars.colors.blue};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.blue)};
    }
  `}
  /* Success */
  ${props => props.success && css`
    background: ${vars.colors.green};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.green)};
    }
  `}
  /* Warning */
  ${props => props.warning && css`
    background: ${vars.colors.yellow};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.yellow)};
    }
  `}
  /* Danger */
  ${props => props.danger && css`
    background: ${vars.colors.red};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.red)};
    }
  `}
  /* Info */
  ${props => props.info && css`
    background: ${vars.colors.teal};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, vars.colors.teal)};
    }
  `}
`;

export default Button;
