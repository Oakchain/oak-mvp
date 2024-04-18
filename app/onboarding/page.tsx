'use client';
import { Modal } from '@/components/Modal';
import { useState } from 'react';

export default function Onboarding() {
  const [openModal, setOpenModal] = useState(true);
  const SetModal = (bool: boolean) => {
    setOpenModal(bool);
  };
  return (
    <section className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Modal openModal={openModal} SetModal={SetModal} />
    </section>
  );
}
