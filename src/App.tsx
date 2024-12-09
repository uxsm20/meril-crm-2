import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import CustomersPage from './pages/Customers';
import DevicesPage from './pages/Devices';
import SalesPipeline from './pages/SalesPipeline';
import PostMarket from './pages/PostMarket';
import Compliance from './pages/Compliance';
import Inventory from './pages/Inventory';
import Quality from './pages/Quality';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="sales" element={<SalesPipeline />} />
          <Route path="post-market" element={<PostMarket />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="quality" element={<Quality />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;