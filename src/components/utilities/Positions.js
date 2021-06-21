import { css } from 'styled-components';

export const Flex = ({jc='center', ai='center', fd='row', fw='no wrap'}) => {
    return css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
`};