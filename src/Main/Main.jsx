import React from 'react';
import Banner from '../Components/Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import { useLoaderData } from 'react-router-dom';
import LinkingTitle from '../Home/LinkingTitle';
import EaterySpecialities from '../EaterySpecialities/EaterySpecialities';
import Menu from '../Menu/Menu';

const Main = () => {
  const chefsData = useLoaderData();
  // console.log(chefsData);
  return (
    <div>
      <Banner></Banner>
      <LinkingTitle>Eatery Specialities</LinkingTitle>
      <EaterySpecialities></EaterySpecialities>
      <LinkingTitle>Our Chefs</LinkingTitle>
      <ChefSection chefsData={chefsData}></ChefSection>
      <LinkingTitle>Try out the Extraordinary Menu</LinkingTitle>
      <Menu></Menu>
    </div>
  );
};

export default Main;
