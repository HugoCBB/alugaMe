import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { MarketplacePage } from './pages/MarketplacePage';

import { CommunityPage } from './pages/CommunityPage';
import { ProfilePage } from './pages/ProfilePage';
import { PublishBookPage } from './pages/PublishBookPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/comunidade" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/publish" element={<PublishBookPage />} />
          {/* Fallback route */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
