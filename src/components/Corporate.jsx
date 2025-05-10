import React from 'react';
import { HeaderMainPageSection } from "./HeaderMainPageSection";
import { EventsSectionUniversal } from "./EventsSectionUniversal";
import { FaqSection } from "../components/FaqSection";
import { CorporateGamesInfo } from "./CorporateGamesInfo";
import openLeague from '../assets/images/open-league.png';
import clubLeague from '../assets/images/club-league.png';
import corporateEvents from '../assets/images/corporate-events.png';
import '../styles/Events.css';
import { CorporateOrderForm } from "./CorporateOrderForm";
import { CorporatePromoVideo } from "./CorporatePromoVideo";

const corpFormats = [
  {
    title: "Игра в полном телевизионном формате (6–12 игроков)",
    description: "Шестёрка знатоков за зеркальным столом проводит игру против телезрителей по современным телевизионным правилам. Если игроков 12, то проводят две игры.",
    image: openLeague,
    position: "left"
  },
  {
    title: "Игра по телевизионным правилам 1989г. (18–30 игроков)",
    description: "Одна из команд начинает игру за Центральным столом и играет за ним до первого неправильного ответа. Затем её сменяет одна из команд, правильно ответивших письменно. Таким образом проводятся одна или две игры до шести очков. Счёт ведётся по результатам Центрального стола (правильный ответ приносит очко Знатокам, неправильный — Телезрителям).",
    image: clubLeague,
    position: "right"
  },
  {
    title: "Игра по правилам Открытой лиги «Что? Где? Когда?» в Петербурге (30 – 120 игроков)",
    description: "В первом туре каждая из команд играет по очереди за Центральным столом (или по два, если команд немного). Во втором туре проводится одна игра до 6 очков. Первая за Центральный стол выходит команда с наибольшим количеством баллов после первого тура, при неправильном ответе её заменяет команда, правильно ответившая письменно, если таких несколько – та, у которой на этот момент больше баллов.",
    image: corporateEvents,
    position: "left"
  }
];

export function Corporate() {
  return (
    <div className="corporate-page">
      <HeaderMainPageSection />
      <CorporateGamesInfo />
      <EventsSectionUniversal title="Наши форматы" items={corpFormats}/>
      <CorporatePromoVideo />
      <CorporateOrderForm />
      <FaqSection />
    </div>
  );
} 