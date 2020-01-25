import styled from 'styled-components'

//TODO: Style the searchbar components using flex-box
/*
    create a styled input component

    The Input:
        * Should grow to the maximum size allowed.
        * Have .2rem horizontal padding 
        * Have 1 rem vertical padding
        * Have a font color of #888
        * The font should be bold
        * there should be no border or outline
        * The placeholder should be colored #ddd
*/


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: .8;
    border: 2px solid #bbb;
    border-radius: .2rem;
    overflow: hidden;
`

//create Input

export const SubmitButton = styled.button`
    height: auto;
    width: 1.5rem;
    border: none;
    background-color: #fa0;
    cursor: pointer;
`