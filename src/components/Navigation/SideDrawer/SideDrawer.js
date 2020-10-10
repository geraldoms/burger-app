import React from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        className={
          classes.SideDrawer + ' ' + 
          (props.open ? classes.Open : classes.Close)
        }
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
