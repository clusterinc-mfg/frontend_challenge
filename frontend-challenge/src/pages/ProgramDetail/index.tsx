import React from 'react';

import Layout from '../../components/Layout/Layout';
import ProgramInfo from '../../components/ProgramInfo/ProgramInfo';
import ProgramInfoBanner from '../../components/ProgramInfoBanner/ProgramInfoBanner';
import SchoolBanner from '../../components/SchoolBanner/SchoolBanner';
import { Spinner } from '../../components/Spinner/Spinner';
import { GET_PROGRAM } from '../../graphQL/queries';

//TODO: Build the School Page page
/* 
  the page should be routed to with a parameter id which
  corrisponds to the id of the program which will be displayed

  renderBody:
    * should set the title of the page to the name of the program
    * should render the school banner
    * should render the program info banner
    * should render the program info
  
  SchoolPage:
    * the contents of the page should be wrapped in the layout component
    * should trigger the GET_PROGRAM query when loaded
      the route for the school page should contain the query parameter "id"
      see the GET_PROGRAM query
    * while the query is loading, the page should display the Spinner
*/

const renderBody = ({
  name,
  programDescription,
  deliveryMode,
  degreeType,
  school,
  costPerCredit,
  requiredCredits,
}) => {

  return (
    <>

      {/* add the school banner here */}
      <ProgramInfoBanner
        costPerCredit={costPerCredit}
        requiredCredits={requiredCredits}
        schoolType={school.schoolType}
        deliveryMode={deliveryMode}
        degreeType={degreeType}
      />
      <ProgramInfo
        programDescription={programDescription}
        schoolDescription={school.schoolDescription}
        schoolName={school.name}
        costPerCredit={costPerCredit}
        requiredCredits={requiredCredits}
      />
    </>
  );
};

//get the query param id
const SchoolPage = () => {
  // trigger the GET_PROGRAM query as soon as the page appears
  // pass it the id from the query param in the pages address


  return (
    <Layout>
      {/* render the Spinner or the renderBody function */}
    </Layout>
  );
};

export default SchoolPage
