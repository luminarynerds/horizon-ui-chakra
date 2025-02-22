import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Sidebar from '../../components/sidebar/Sidebar';

const AdminLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" ml={{ base: 0, md: '250px' }} transition="margin 0.2s ease" p="4">
        <Outlet /> {/* This renders the nested routes */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
