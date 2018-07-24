import { createElement, ClassAttributes } from 'react';
import styled from 'react-emotion';

interface Props {
  title: string;
  className?: string;
}

export const Title = ({
  title,
  className
}: ClassAttributes<HTMLElement> & Props) => (
  <Root className={className}>{title}</Root>
);

const Root = styled('div')({
  fontSize: 24
});
