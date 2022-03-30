import React, {useContext} from 'react';
import classes from './CompanyPage.module.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import {AuthContext} from '../../context/AuthContext';
import mockData from './mockData-company';

function CompanyPage() {
  const list = mockData.persons;
  const updatedList = list.map((employee)=>{
    // eslint-disable-next-line react/jsx-key
    return <li>{employee}</li>;
  });

  return (
    <div className={classes.SettingsPage}>
      <h1>{mockData.name}</h1>
      <div className={classes.ContentContainer}>
        <h2>
          Company Information
        </h2>
        <div className={classes.DetailSet}>
          <h4>Location</h4>
          <p>{mockData.location}</p>
        </div>
        <div className={classes.DetailSet}>
          <h4>Description</h4>
          <p>{mockData.description}</p>
        </div>
        <div className={classes.DetailSet}>
          <h4>Date Founded</h4>
          <p>{mockData.date_founded}</p>
        </div>
        <h2>
          List of Employees
        </h2>
        <div className={classes.DetailSet}>
          <ul>{updatedList}</ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;

