import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

// Importing layouts
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';

// Importing components
import ELearning, { Courses, Lessons, Quizzes } from './components/ELearning';
import Marketing, { Campaigns, MarketingAnalytics, EmailTemplates } from './components/Marketing';
import AITools, { ChatAssistant, ImageGenerator } from './components/AITools';

// Import theme
import initialTheme from './theme/theme';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <ChakraProvider theme={currentTheme}>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="auth/*" element={<AuthLayout />} />

          {/* Admin Dashboard */}
          <Route
            path="admin/*"
            element={
              <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />

          {/* Default Redirect to Admin */}
          <Route path="/" element={<Navigate to="/admin" replace />} />

          {/* E-Learning Routes */}
          <Route path="/elearning" element={<ELearning />} />
          <Route path="/elearning/courses" element={<Courses />} />
          <Route path="/elearning/lessons" element={<Lessons />} />
          <Route path="/elearning/quizzes" element={<Quizzes />} />

          {/* Marketing Routes */}
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/marketing/campaigns" element={<Campaigns />} />
          <Route path="/marketing/analytics" element={<MarketingAnalytics />} />
          <Route path="/marketing/email-templates" element={<EmailTemplates />} />

          {/* AI Tools Routes */}
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/ai-tools/chat" element={<ChatAssistant />} />
          <Route path="/ai-tools/image-generator" element={<ImageGenerator />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
