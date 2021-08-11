import React from 'react';
import {
  Middle,
  EmptyListTitle,
  EmptyListText,
  EmptyListImg,
  LinkButton,
} from '../styled';

interface Props {
  onClick: () => void;
}
export const EmptyList = ({ onClick }:Props) => (
  <>
    <Middle>
      <EmptyListImg />
      <EmptyListTitle>Новых уведомлений нет</EmptyListTitle>
      <EmptyListText>
        Но вы можете
        <LinkButton onClick={onClick}>{'\u00A0'}Посмотреть все{'\u00A0'}</LinkButton>
        полученные уведомления
      </EmptyListText>
    </Middle>
  </>
);
