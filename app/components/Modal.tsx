import React from 'react';
import { FlowBite } from '@/app/utils';

interface ModalProps {
  openModal: boolean;
  SetModal: any;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
 const { SetModal, openModal, children} = props;

  return (
    <>
      <FlowBite.Modal dismissible show={openModal} onClose={() => SetModal(false)}>
        <FlowBite.Modal.Header>Terms of Service</FlowBite.Modal.Header>
        <FlowBite.Modal.Body>
          <div className='space-y-6'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </FlowBite.Modal.Body>
        <FlowBite.Modal.Footer>
          <FlowBite.Button onClick={() => SetModal(false)}>I accept</FlowBite.Button>
          <FlowBite.Button color='gray' onClick={() => SetModal(false)}>
            Decline
          </FlowBite.Button>
        </FlowBite.Modal.Footer>
      </FlowBite.Modal>
    </>
  );
}
