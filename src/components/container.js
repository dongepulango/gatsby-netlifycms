//styles
import styled from 'styled-components';
import vars from './varss';

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : vars.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px; 
`;

export default Container;