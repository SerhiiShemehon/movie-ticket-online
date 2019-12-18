import React from 'react';

import { NavLink  } from "react-router-dom";

export const PrimaryNav = () => {
  let menuList = [
    {
      link: '/',
      title: 'Главная'
    },
    {
      link: '/movies',
      title: 'Фильмы'
    },
    {
      link: '/schedule',
      title: 'Расписания'
    },
    {
      link: '/news',
      title: 'Новости'
    }
  ];

  return (
    <ul className="menu">
      {menuList.map((item, i) => (
          <li key={i}>
            <NavLink exact to={item.link} activeClassName="active">{item.title}</NavLink>
          </li>
        )
      )}
    </ul>
  );
}