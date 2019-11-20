import React from 'react';

import { Link } from "react-router-dom";

export const PrimaryNav = () => {
  let menuList = [
    {
      link: '/',
      title: 'Главная'
    },
    {
      link: '/movies/',
      title: 'Фильмы'
    }
    ,
    {
      link: '/timetable/',
      title: 'Расписания'
    }
    ,
    {
      link: '/halls/',
      title: 'Залы'
    }
  ];

  return (
    <ul className="menu">
      {menuList.map((item, i) => {
        return (
          <li key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}