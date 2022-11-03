import styled from "styled-components";

export const TodoLi = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: ${p => p.theme.space[4]}px;
    width: 700px;
    margin-bottom: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    background-color: ${p => p.theme.colors.white};;
`

export const StyledBtn = styled.button`
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    text-decoration: none;
    border-radius: ${p => p.theme.radii.normal};
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    transition: background-color 250ms linear, 
    scale 250ms linear;
    :hover {
        scale: 1.1;
    }
`

export const StyledContent =styled.p`
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
`