import React from 'react';
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


export default function Menu() {
    return (
      <div className='ui attached tabular menu'>
        <NavLink exact to='/' className='item'>
          <Icon name='home' />
          Home Page
        </NavLink>
        <NavLink to='/character' className='item'>
          <Icon name='users' />
          Characters
        </NavLink>
        <NavLink to='/search' className='item'>
        <Icon name='search' />
        Character Search
      </NavLink>
    </div>
    )
}