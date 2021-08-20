import React from 'react';
import {
  Container,
  Title,
  Button,
  ButtonContainer,
  ContainerColorVariants,
} from './styles';

interface ButtonBannerProps {
  label: string;
  onClick?: () => void;
}

type TBannerActions = Array<ButtonBannerProps> & {
  0?: ButtonBannerProps,
  1?: ButtonBannerProps,
};

interface Props {
  title: string;
  color?: keyof typeof ContainerColorVariants;
  actions?: TBannerActions;
}
export function Banner({
  title,
  color = 'info',
  actions,
}:Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      { actions && (
      <ButtonContainer>
        { actions.map(
          (action) => (
            <Button
              hasMargin={actions.length > 1}
              size="small"
              assign="outlined"
              onClick={action.onClick}
            >{action.label}
            </Button>
          ),
        )}
      </ButtonContainer>
      )}
    </Container>
  );
}
