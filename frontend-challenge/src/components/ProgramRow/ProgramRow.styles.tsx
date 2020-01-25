import styled from 'styled-components'

interface FieldProps {
    start: number,
    end: number
}

interface LogoProps {
    url: any
}

export const Container = styled.a`
    display: grid;
    grid-template-columns: 4.5rem 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    height: 4rem;
    width: 100%;
    border-radius: .5rem;
    box-shadow: 2px 2px 2px 2px #888;
    padding: .5rem 1rem;
    margin: .5rem 0;
    cursor: pointer;
    
`

export const Logo = styled.div`
    height: 4rem;
    width: 4rem;
    grid-row-start: 1;
    grid-row-end: 4;
    border-radius: .5rem;
    background-image: url(${(props:LogoProps)=>props.url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const TitleWrapper = styled.div`

`

export const ProgramName = styled.h3`
    font-size: 22px;
    grid-row-start: 1;
    grid-row-end: 2;
`
export const CollegeName = styled.p`
    font-size: 18px;
    grid-row-start: 2;
    grid-row-end: 3;
`
export const FieldHeader = styled.h5`
    grid-row-start: 1;
    grid-row-end: 2;
    ${({start, end}:FieldProps)=> `
        grid-column-start: ${start};
        grid-column-end: ${end};
    `};
    justify-self: center;
    
`

export const FieldValue = styled.p`
    grid-row-start: 2;
    grid-row-end: 3;
    ${({start, end}:FieldProps)=> `
        grid-column-start: ${start};
        grid-column-end: ${end};
    `};
    justify-self: center;
`
export const FieldWrapper = styled.div`
    display: grid;
    margin-left: auto;
    width: 25rem;
    grid-template-columns: repeat(3, 1fr);
`
export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`
