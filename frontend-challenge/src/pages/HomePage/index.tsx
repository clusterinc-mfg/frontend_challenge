import React from 'react';

import BottomBar from '../../components/BottomBar/BottomBar';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Layout from '../../components/Layout/Layout';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import { Spinner } from '../../components/Spinner/Spinner';
import { PROGRAM_SEARCH } from '../../graphQL/queries';
import { ProgramContainer, ResultsHeader } from './HomePage.styles';

//TODO: Build the home page
/*
  add appropriate types

  renderProgramContainer:  
    *   Finish the function renderHeader.  If a search term is present, it should return
        "129 Items For Engineering!" where 129 is the number of items and engineering is the search term.
        If the term is not present, it should return "129 Items Found!" where 129 is the total number of items.

    *   Render the list of programs under the ResultsHeader

  HomePage:
    *  Use hooks when possible.

    *  When the home page compoent renders it should trigger the PROGRAM_SEARCH query.
       The graphQL query PROGRAM_SEARCH accepts the following variables:
       offset, limit, term, and filter.  It returns two items, count & programs.
       run the query and render out the HomePage.

    *  Pull the term and filter from the redux store

    *  Create a piece of state called page

    *  Inside of the layout component render the FilterMenu, ProgramContainer, and BottomBar

    *  If the query is loading, render the spinner.  Once is it done call the renderProgramContainer function.

*/

const renderProgramContainer = (programs, count, term = null) => {
  const renderPrograms = programs =>
    programs.map((program, i) => (
      <ProgramRow key={program.id + program.name} program={program} />
    ));

  // write the renderHeader function

  return (
    <ProgramContainer>
      {/* render the header inside of the ResultsHeader component */}
      {/* Render the list of programs here using a function called renderPrograms */}
      {renderPrograms(programs)}
    </ProgramContainer>
  );
};

const HomePage = () => {

  const itemsPerPage = 10;

  // Pull the term and filter from the redux store


  // Use the PROGRAM_SEARCH QUERY to get the count and programs list
  // supply that query with the offest, limit, term, and filter options


  return (
    <Layout>

{/* Filter Menu goes here */}
{/* Spinner or programs container */}
{/* Bottom Bar */}
      <BottomBar
        count={}    //put the count data here
        page={}     //put the current page here
        setPage={}  //put a function to set the page here
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  );
};

export default HomePage;
