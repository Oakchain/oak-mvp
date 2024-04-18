'use client';
import { useState } from 'react';
import { FlowBite } from '@/utils'

interface ButtonProps {
 OnClick: any;
 Text: string
}

/**Use this Button everywhere */
export function Button(props: ButtonProps) {
  const { OnClick, Text } = props;

  return (
    <>
      <FlowBite.Button onClick={OnClick}>{Text}</FlowBite.Button>
    </>
  );
}
