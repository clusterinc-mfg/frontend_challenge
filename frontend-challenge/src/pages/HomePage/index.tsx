import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import BottomBar from '../../components/BottomBar/BottomBar';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { PROGRAM_SEARCH } from '../../graphQL/queries';
import { Spinner } from '../../components/Spinner/Spinner';
import { useSelector, shallowEqual } from 'react-redux';
import { ResultsHeader, ProgramContainer } from './HomePage.styles';
import ProgramRow from '../../components/ProgramRow/ProgramRow';

//TODO: Build the home page
/*
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

    *  Create a piece of state for the page vairable

    *  Inside of the layout component render the FilterMenu, ProgramContainer, and BottomBar

    *  If the query is loading, render the spinner.  Once is it done call the renderProgramContainer function.

    *  Pass page, count, a function to update the page, and the numberOfItemsPerPage to the BottomBar

    *  
*/

const renderProgramContainer = (programs, count, term = null) => {
  const renderPrograms = programs =>
    programs.map((program, i) => (
      <ProgramRow key={program.id + program.name + i} program={program} />
    ));

  const renderHeader = (count, term) =>
    term ? `${count} items found for ${term}!` : `${count} items found!`;

  return (
    <ProgramContainer>
      <ResultsHeader>{renderHeader(count, term)}</ResultsHeader>
      {/* Render the list of programs here using a function called renderPrograms */}
      {renderPrograms(programs)}
    </ProgramContainer>
  );
};

const HomePage = () => {
  let count = 0;
  let programs = [];
  const itemsPerPage = 10;

  const [page, setPage] = useState(1);

  // Pull the term and filter from the redux store
  const term = useSelector((state: any) => state.term, shallowEqual);
  const filter = useSelector((state: any) => state.filter, shallowEqual);

  let variables = {
    data: {
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
      term,
      filter,
    },
  };

  // Use the PROGRAM_SEARCH QUERY to get the count and programs list
  const { loading, data } = useQuery(PROGRAM_SEARCH, { variables });

  if (!loading) {
    count = data.programSearch.count;
    programs = data.programSearch.programs;
  }

  return (
    <Layout>
      {/* Add the FilterMenu, Spinner, renderProgramContainer, and BottomBar.
      Only render spinner if loading query*/}
      <FilterMenu />

      {loading ? <Spinner /> : renderProgramContainer(programs, count, term)}

      <BottomBar
        count={count}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  );
};

export default HomePage;