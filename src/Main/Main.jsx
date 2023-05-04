import React from 'react';
import Banner from '../Components/Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
  const chefsData = useLoaderData();
  // console.log(chefsData);
  return (
    <div>
      <Banner></Banner>
      <ChefSection chefsData={chefsData}></ChefSection>
    </div>
  );
};

export default Main;
