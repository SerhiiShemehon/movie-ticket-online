import React from 'react';

import { NavLink  } from "react-router-dom";

export const PrimaryNav = () => {
  let menuList = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/movies',
      title: 'Movies'
    },
    {
      link: '/schedule',
      title: 'Schedule'
    }
    ,
    {
      link: '/news',
      title: 'News'
    }
  ];

  return (
    <ul className="menu">
      {menuList.map((item, i) => {
        return (
          <li key={i}>
            <NavLink exact to={item.link}>{item.title}</NavLink >
          </li>
        );
      })}
    </ul>
  );
}