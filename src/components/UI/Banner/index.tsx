import React from 'react';
import {
  Container,
  Title,
  Button,
  ButtonContainer,
  ContainerColorVariants,
} from './styles';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

interface Props {
  title: string;
  color?: keyof typeof ContainerColorVariants;
  buttons?: ButtonProps[];
}
export function Banner({
  title,
  color = 'info',
  buttons,
}:Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <ButtonContainer>
        { buttons?.map(
          (button) => (
            <Button
              hasMargin={buttons.length > 1}
              size="small"
              assign="outlined"
              onClick={button.onClick}
            >{button.label}
            </Button>
          ),
        )}
      </ButtonContainer>
    </Container>
  );
}
