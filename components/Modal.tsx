import React from 'react';
import { FlowBite } from '@/utils';
import { ModalProps } from '@/interfaces';

export function Modal(props: ModalProps) {
 const { SetModal, openModal, children} = props;

  return (
    <>
      <FlowBite.Modal dismissible show={openModal} onClose={() => SetModal(false)}>
        <FlowBite.Modal.Header>Getting Started</FlowBite.Modal.Header>
        <FlowBite.Modal.Body>Complete all the 4 Onboarding tasks and claim 100 NUTs</FlowBite.Modal.Body>
        <FlowBite.Modal.Body>
          <div className='space-y-6'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>Create Oak Account</p>
            <p className='text-base leading-relaxed text-gray-200 dark:text-gray-200'>
              Explore decentralization and have fun while at it.
            </p>
          </div>
        </FlowBite.Modal.Body>
        <FlowBite.Modal.Footer>
          <FlowBite.Button onClick={() => SetModal(false)}>claim 100 Nuts</FlowBite.Button>
        </FlowBite.Modal.Footer>
      </FlowBite.Modal>
    </>
  );
}
