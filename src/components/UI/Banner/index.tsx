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
  isShown: boolean;
  buttons?: ButtonProps[];
  verticalAlign?: string;
  horizontalAlign?: string;
}
export function Banner({
  title = 'Уведомление',
  color = 'info',
  isShown = false,
  buttons,
  verticalAlign = 'top',
  horizontalAlign = 'right',
}:Props) {
  const [firstButton, secondButton] = buttons || [];
  return (
    <>
      { isShown && (
        <Container
          color={color}
          vertical={verticalAlign}
          horizontal={horizontalAlign}
        >
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
      )}
    </>
  );
}
