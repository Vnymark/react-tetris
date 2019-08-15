import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vh;
    height: 100vh;
    background: #000;
    background-size: cover;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        diplay: block;
        padding: 0 20px;
    }
`;