import HeaderComponent from '@/components/Layout/Dashboard/Header';
import SiderComponent from '@/components/Layout/Dashboard/Sider';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <SiderComponent />
      <div className='flex flex-col'>
        <HeaderComponent />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
