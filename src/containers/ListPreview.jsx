import React from 'react';
import { Link } from "react-router-dom";


export class ListPreview extends React.Component {

  news = [
    {
      title: 'Фрида. Viva La Vida',
      descriptions: 'Приглашаем 4 декабря в кинотеатр Киев в 19-30. История помнит не так много женщин со столь поразительной внутренней силой, которую имела Фрида Кало.',
      link: '/error/'
    },
    {
      title: 'Лондонский королевский балет: Щелкунчик',
      descriptions: 'Премьера состоится 19 декабря в кинотеатр Киев в 19-30. «Щелкунчик» — балет, без которого просто невозможно представить Рождество.',
      link: '/error/'
    },
    {
      title: 'Лондонский королевский балет. Концерт. Энигма-Вариации. Раймонда Действие III',
      descriptions: 'Премьера состоится 11 декабря в кинотеатр Киев в 20-00.',
      link: '/error/'
    },
    {
      title: 'Опера Дон Паскуале',
      descriptions: 'Приглашаем 6 декабря в кинотеатр Киев в 19-30. «Дон Паскуале» — фарс, который не имеет себе равных.Это яркий пример оперы- буффа в ее классическом виде, которая имела большой успех еще в середине XIX века.',
      link: '/error/'
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