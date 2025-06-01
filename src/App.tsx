import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import ProjectsPage from './pages/ProjectsPage';
import GoalsPage from './pages/GoalsPage';
import AchievementsPage from './pages/AchievementsPage';
import EducationPage from './pages/EducationPage';
import HobbiesPage from './pages/HobbiesPage';

function App() {
  return (
    <>
      <div className="scanline"></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="hobbies" element={<HobbiesPage />} />
          <Route path="project/:id" element={<ProjectsPage />} />
          <Route path="achievement/:id" element={<AchievementsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;