import React, {useState} from 'react'

//import necissary items for updating redux store
//Import necissary items to use fontAwesome
import {Container, Input, SubmitButton} from './SearchBar.styles'

// TODO: Build and style the search bar
/*
    For this component use hooks to manage state, and update the redux store.

    Container:
        * Should house the Input and SubmitButton

    The Input:
        * Should be a controlled component
        * Placeholder should read "Search for Online Course"
        * Submit the term to the redux store if the user presses enter
        * If the user is on the program details page they should be routed to /
    
    The SubmitButton:
        * Should contain the font awesome icon faSearch
        * The color of the icon should be #FFF
        * Submit the term to the redux store if clicked by the user
*/



const SearchBar = () => {
    
    return(
        <Container>
            <Input/>
            <SubmitButton ></SubmitButton>
        </Container>
    )
}

export default SearchBar