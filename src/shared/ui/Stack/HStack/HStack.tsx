import { ReactNode } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

export const HStack = (props: Omit<FlexProps, 'direction'> & {children: ReactNode}) => (
    <Flex {...props} direction="row" />
);
