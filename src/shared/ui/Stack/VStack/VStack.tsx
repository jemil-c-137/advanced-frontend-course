import { ReactNode } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

export const VStack = (props: Omit<FlexProps, 'direction'> & {children: ReactNode}) => {
    const { align = 'start' } = props;

    return (
        <Flex {...props} direction="column" align={align} />
    );
};
