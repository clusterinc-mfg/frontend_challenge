import React from 'react';

import { Container, MenuContainer, MenuItem } from './FilterMenu.styles';

//TODO: Finish the Filter Menu

/*
  update the filter state to the appropriate type when the MenuItem is clicked
*/




const FilterMenu = () => {

  return(
    <Container>
    <MenuContainer>
      Filter by: <MenuItem  >Certificate</MenuItem> |
      <MenuItem>Bachelors</MenuItem> |
      <MenuItem>Masters</MenuItem> |
      <MenuItem>Ph.D.</MenuItem> |
      <MenuItem>All</MenuItem>
    </MenuContainer>
  </Container>
  )

}


export default FilterMenu;
