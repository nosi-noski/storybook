import React from 'react';
import {
  Container,
  Title,
  Content,
  Bottom,
  Button,
  Buttons,
  Stepper,
} from './styles';

type ButtonType = 'back' | 'next';

interface ButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void;
  callback?: () => void;
}

export type TActions = Array<ButtonProps>;

export interface SlideProps {
  title: string;
  content?: string;
  actions?: TActions;
  stepper?: JSX.Element;
}

export function Slide({
  title,
  content,
  actions,
  stepper,
}:SlideProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {actions && (
        <Bottom>
          {stepper && (
            <Stepper>
              {stepper}
            </Stepper>
          )}
          <Buttons>
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
          </Buttons>
        </Bottom>
      )}
    </Container>
  );
}
