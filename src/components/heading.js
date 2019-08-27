//styles
import styled, { css } from 'styled-components';
import { between } from 'polished';
import vars from './varss';

//styled
const Heading = styled.h1`
  color: ${vars.colors.textDark};
  font-weight: 500;
  line-height: ${props => props.lh ? props.lh : 1.2};
  margin-bottom: ${props => props.mb ? props.mb : '20px'};
  font-size: ${props => props.size ? props.size+'px' : '40px'};
  @media (max-width: ${vars.media.lgMax}) {
    font-size: ${props => props.size ? between((props.size - 10)+'px', props.size+'px') : between('30px', '40px')};
  }
  /* Heading2 */
  ${props => props.heading2 && css`
    font-size: ${props => props.size ? props.size+'px' : '32px'};
    @media (max-width: ${vars.media.lgMax}) {
      font-size: ${props => props.size ? between((props.size - 8) + 'px', props.size + 'px') : between('24px', '32px')};
    }
  `}
  /* Heading3 */
  ${props => props.heading3 && css`
    font-size: ${props => props.size ? props.size + 'px' : '28px'};
    @media (max-width: ${vars.media.lgMax}) {
      font-size: ${props => props.size ? between((props.size - 8) + 'px', props.size + 'px') : between('22px', '28px')};
    }
  `}
  /* Heading4 */
  ${props => props.heading4 && css`
    font-size: ${props => props.size ? props.size + 'px' : '24px'};
    @media (max-width: ${vars.media.lgMax}) {
      font-size: ${props => props.size ? between((props.size - 6) + 'px', props.size + 'px') : between('18px', '24px')};
    }
  `}
  /* Heading5 */
  ${props => props.heading5 && css`
    font-size: ${props => props.size ? props.size + 'px' : '20px'};
    @media (max-width: ${vars.media.lgMax}) {
      font-size: ${props => props.size ? between((props.size - 4) + 'px', props.size + 'px') : between('16px', '20px')};
    }
  `}
  /* Heading6 */
  ${props => props.heading6 && css`
    font-size: ${props => props.size ? props.size + 'px' : '16px'};
    @media (max-width: ${vars.media.lgMax}) {
      font-size: ${props => props.size ? props.size + 'px' : '16px'};
    }
  `}
`;

export default Heading;