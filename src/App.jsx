import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { HeaderMainPageSection } from "./components/HeaderMainPageSection";
import { EventsSection } from "./components/EventsSection";
import { GameInfoSection } from "./components/GameInfoSection";
import { NextGameSection } from "./components/NextGameSection";
import { FaqSection } from "./components/FaqSection";
import { PartnersSection } from "./components/PartnersSection";
import { Footer } from "./components/Footer";
import { Rules } from "./components/Rules";
import { Schedule } from "./components/Schedule";
import { Rating } from "./components/Rating";
import { Login } from "./components/Login";
import { Profile } from './components/Profile';
import { Registration } from './components/Registration';
import { News } from './components/News';
import { NotFound } from './components/NotFound';
import { ServerError } from './components/ServerError';
import { Corporate } from './components/Corporate';
import { CorporateHeader } from './components/CorporateHeader';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import "./App.css";
import "./styles/Button.css";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <ScrollToTopButton />
        <Routes>
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Открытая лига */}
          <Route path="/open" element={<Navigate to="/open/" replace />} />
          <Route path="/open/" element={
            <div className="main-page">
              <Header />
              <HeaderMainPageSection />
              <EventsSection />
              <GameInfoSection />
              <NextGameSection />
              <FaqSection />
              <PartnersSection />
              <Footer />
            </div>
          } />
          <Route path="/open/rules" element={
            <>
              <Header />
              <Rules />
              <Footer />
            </>
          } />
          <Route path="/open/schedule" element={
            <>
              <Header />
              <Schedule />
              <Footer />
            </>
          } />
          <Route path="/open/rating" element={
            <>
              <Header />
              <Rating />
              <Footer />
            </>
          } />
          <Route path="/open/login" element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/open/profile" element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          } />
          <Route path="/open/registration" element={
            <>
              <Header />
              <Registration />
              <Footer />
            </>
          } />
          <Route path="/open/register" element={<Navigate to="/open/registration" replace />} />
          <Route path="/open/news" element={
            <>
              <Header />
              <News />
              <Footer />
            </>
          } />

          {/* Клубная лига */}
          <Route path="/club" element={<Navigate to="/club/" replace />} />
          <Route path="/club/" element={
            <div className="main-page">
              <Header />
              <HeaderMainPageSection />
              <EventsSection />
              <GameInfoSection />
              <NextGameSection />
              <FaqSection />
              <PartnersSection />
              <Footer />
            </div>
          } />
          <Route path="/club/rules" element={
            <>
              <Header />
              <Rules />
              <Footer />
            </>
          } />
          <Route path="/club/schedule" element={
            <>
              <Header />
              <Schedule />
              <Footer />
            </>
          } />
          <Route path="/club/rating" element={
            <>
              <Header />
              <Rating />
              <Footer />
            </>
          } />
          <Route path="/club/login" element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/club/profile" element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          } />
          <Route path="/club/registration" element={
            <>
              <Header />
              <Registration />
              <Footer />
            </>
          } />
          <Route path="/club/register" element={<Navigate to="/club/registration" replace />} />
          <Route path="/club/news" element={
            <>
              <Header />
              <News />
              <Footer />
            </>
          } />

          {/* Корпоративы */}
          <Route path="/corporate" element={
            <>
              <CorporateHeader />
              <Corporate />
              <Footer />
            </>
          } />

          {/* Редирект с корневого пути */}
          <Route path="/" element={<Navigate to="/open/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
