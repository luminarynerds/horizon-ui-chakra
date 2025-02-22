import './assets/css/App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import initialTheme from './theme/theme';

// Layout imports
import AdminLayout from './layouts/admin/AdminLayout';

// Component imports
import Dashboard from './components/Dashboard';
import CRM from './components/CRM';
import ELearning from './components/ELearning';
import Marketing from './components/Marketing';
import EventManagement from './components/EventManagement';
import AITools from './components/AITools';
import DesignGallery from './components/DesignGallery';
import Tutorials from './components/Tutorials';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminLayout />, // This should wrap all admin routes
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'crm', element: <CRM /> },
      { path: 'elearning', element: <ELearning /> },
      { path: 'marketing', element: <Marketing /> },
      { path: 'event-management', element: <EventManagement /> },
      { path: 'ai-tools', element: <AITools /> },
      { path: 'design-gallery', element: <DesignGallery /> },
      { path: 'tutorials', element: <Tutorials /> },
    ],
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  },
  {
    path: '*',
    element: <Navigate to="/admin" replace />
  }
]);

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <ChakraProvider theme={currentTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
