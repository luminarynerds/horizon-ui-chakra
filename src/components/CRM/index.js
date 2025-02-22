import Customers from './Customers';
import Contacts from './Contacts';
import Deals from './Deals';
import { Outlet } from 'react-router-dom';

// Parent CRM component
const CRM = () => {
  return (
    <div>
      <h1>CRM Dashboard</h1>
      <Outlet />
    </div>
  );
};

const crmRoutes = {
  path: 'crm',
  element: <CRM />, // Parent outlet for CRM
  children: [
    { index: true, element: <Navigate to="customers" replace /> },
    { path: 'customers', element: <Customers /> },
    { path: 'contacts', element: <Contacts /> },
    { path: 'deals', element: <Deals /> },
  ]
};

export default CRM;
export { Customers, Contacts, Deals, crmRoutes };