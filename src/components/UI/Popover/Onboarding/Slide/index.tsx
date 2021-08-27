import React from 'react';
import {
  Container,
  Title,
  Content,
  Bottom,
  Button,
} from './styles';

interface ButtonProps {
  label: string;
  type?: 'close' | 'back' | 'next';
  onClick?: () => void;
  callback?: () => void;
}

export type TActions = Array<ButtonProps>;

export interface SlideProps {
  title: string;
  content?: string;
  actions?: TActions;
}

export function Slide({
  title,
  content,
  actions,
}:SlideProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {actions && (
        <Bottom>
          { actions.map((action) => {
            const handleClick = () => {
              action.onClick?.();
              action.callback?.();
            };
            return (
              <Button onClick={handleClick}>
                {action.label}
              </Button>
            );
          })}
        </Bottom>
      )}
    </Container>
  );
}
