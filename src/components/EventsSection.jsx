import React from "react";
import { EventsSectionUniversal } from "./EventsSectionUniversal";
import openLeague from "../assets/images/open-league.png";
import clubLeague from "../assets/images/club-league.png";
import corporateEvents from "../assets/images/corporate-events.png";

export function EventsSection() {
  const events = [
    {
      title: "Открытая лига",
      description: "Открытая лига — это массовый и состязательный формат, идеально подходящий для новичков и тех, кто хочет попробовать свои силы в игре «Что? Где? Когда?». Здесь вы сможете насладиться духом соревнования, встретить новых друзей и проверить свои знания в дружеской атмосфере. \nМы рекомендуем всем новичкам начинать именно с Открытой лиги!",
      image: openLeague,
      position: "left"
    },
    {
      title: "Клубная лига", 
      description: "Клубная лига — это более узкий и профессиональный формат, максимально приближенный к телевизионной версии игры. Если вы уже имеете опыт участия в интеллектуальных турнирах и хотите погрузиться в более серьёзный уровень состязаний, то Клубная лига — это ваш выбор.",
      image: clubLeague,
      position: "right"
    },
    {
      title: "Корпоративы и частные мероприятия",
      description: "Помимо регулярных турниров, мы также проводим корпоративные мероприятия и частные игры. Если вы хотите организовать интеллектуальный турнир для своей компании или друзей, свяжитесь с нами, и мы поможем сделать ваше мероприятие незабываемым.",
      image: corporateEvents,
      position: "left"
    }
  ];

  return (
    <EventsSectionUniversal
      title="Наши мероприятия"
      items={events}
    />
  );
}
