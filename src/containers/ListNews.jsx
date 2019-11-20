import React from 'react';
import { Link } from "react-router-dom";


export class ListNews extends React.Component {

  news = [
    {
      title: 'Зміни щодо умов бронювання квитків',
      descriptions: 'До уваги глядачів мережі TICKET Послуга бронювання квитків з 1го...',
      link: '/'
    },
    {
      title: '1 червня разом з мережею TICKET',
      descriptions: 'Мережа кінотеатрів TICKET вже третій рік поспіль до Дня Захисту...',
      link: '/'
    },
    {
      title: 'Перегляд фільмів у форматі 3D став більш приємним в мережі TICKET',
      descriptions: 'Мережа кінотеатрів TICKET не тільки найбільша мережа в Харкові, але...',
      link: '/'
    },
    {
      title: 'Розіграш двох квитків на фільм “Хеллбой”',
      descriptions: '10 листопада, відбудеться #розіграш двох квитків на фільм "Вбивство у "Східному експресі""...',
      link: '/'
    }
  ]

  render() {

    return (
      <div className="box-list">
        {
          this.news.map((item, i) => (
            <div className="box-item" key={i}>
              <Link to={item.link}>
                <h3>{item.title}</h3>
                <p>{item.descriptions}</p>
              </Link>
            </div>
          ))
        }
      </div>
    );
  };
}