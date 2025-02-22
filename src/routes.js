import React from 'react';
import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
  MdInventory2,
  MdEvent,
  MdPeople,
  MdSmartToy,
  MdDesignServices,
  MdSchool,
  MdTrendingUp,
  MdInsights,
  MdNotifications,
  MdRateReview,
  MdEventNote,
} from 'react-icons/md';

// View Imports
import Dashboard from 'views/admin/dashboard';
import InventoryPricing from 'views/admin/inventory-pricing';
import BookingsEvents from 'views/admin/bookings-events';
import EventPlanner from 'views/admin/event-planner';
import CommunityForum from 'views/admin/community-forum';
import AICaptionGenerator from 'views/admin/ai-caption-generator';
import ContextualInsights from 'views/admin/contextual-insights';
import DesignGallery from 'views/admin/design-gallery';
import Tutorials from 'views/admin/tutorials';
import BalloonArtTrends from 'views/admin/balloon-art-trends';
import AnalyticsInsights from 'views/admin/analytics-insights';
import NotificationCenter from 'views/admin/notification-center';
import ReviewSystem from 'views/admin/review-system';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: <Dashboard />,
  },
  {
    name: 'Inventory & Pricing',
    layout: '/admin',
    path: '/inventory-pricing',
    icon: <Icon as={MdInventory2} width="20px" height="20px" color="inherit" />,
    component: <InventoryPricing />,
  },
  {
    name: 'Bookings & Events',
    layout: '/admin',
    path: '/bookings-events',
    icon: <Icon as={MdEvent} width="20px" height="20px" color="inherit" />,
    component: <BookingsEvents />,
  },
  {
    name: 'Event Planner',
    layout: '/admin',
    path: '/event-planner',
    icon: <Icon as={MdEventNote} width="20px" height="20px" color="inherit" />,
    component: <EventPlanner />,
  },
  {
    name: 'Community Forum',
    layout: '/admin',
    path: '/community-forum',
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    component: <CommunityForum />,
  },
  {
    name: 'AI Caption Generator',
    layout: '/admin',
    path: '/ai-caption-generator',
    icon: <Icon as={MdSmartToy} width="20px" height="20px" color="inherit" />,
    component: <AICaptionGenerator />,
  },
  {
    name: 'Contextual Insights',
    layout: '/admin',
    path: '/contextual-insights',
    icon: <Icon as={MdInsights} width="20px" height="20px" color="inherit" />,
    component: <ContextualInsights />,
  },
  {
    name: 'Design Gallery',
    layout: '/admin',
    path: '/design-gallery',
    icon: <Icon as={MdDesignServices} width="20px" height="20px" color="inherit" />,
    component: <DesignGallery />,
  },
  {
    name: 'Tutorials',
    layout: '/admin',
    path: '/tutorials',
    icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
    component: <Tutorials />,
  },
  {
    name: 'Balloon Art Trends',
    layout: '/admin',
    path: '/balloon-art-trends',
    icon: <Icon as={MdTrendingUp} width="20px" height="20px" color="inherit" />,
    component: <BalloonArtTrends />,
  },
  {
    name: 'Analytics Insights',
    layout: '/admin',
    path: '/analytics-insights',
    icon: <Icon as={MdInsights} width="20px" height="20px" color="inherit" />,
    component: <AnalyticsInsights />,
  },
  {
    name: 'Notification Center',
    layout: '/admin',
    path: '/notification-center',
    icon: <Icon as={MdNotifications} width="20px" height="20px" color="inherit" />,
    component: <NotificationCenter />,
  },
  {
    name: 'Review System',
    layout: '/admin',
    path: '/review-system',
    icon: <Icon as={MdRateReview} width="20px" height="20px" color="inherit" />,
    component: <ReviewSystem />,
  },
];

export default routes;
