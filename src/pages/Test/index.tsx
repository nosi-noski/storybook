import React, { useState } from 'react';
import { Icon } from 'components/UI/Icon';
import { Dialog } from 'components/UI/Dialog';
import { Button } from 'components/UI/Button';

import { Row, Label } from './styles';

interface Props{
  onCancel: () => void;
  onSubmit: () => void;
}
function Actions({ onSubmit, onCancel }:Props) {
  return (
    <>
      <Button assign="outlined" size="small" onClick={onCancel}>Отмена</Button>
      <Button assign="contained" size="small" onClick={onSubmit}>Сохранить</Button>
    </>
  );
}

export function Test() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const handleClose = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  return (
    <div>
      Text page
      <Row>
        <Label type="info">Информация</Label>
        <Label type="success">Успешно</Label>
        <Label type="warning">Предупреждение</Label>
        <Label type="error">Ошибка</Label>
        <Label type="default">Нейтральный</Label>
      </Row>
      <Row>
        <Label type="info"><Icon iconName="add" /></Label>
        <Label type="success"><Icon iconName="check" /></Label>
        <Label type="warning"><Icon iconName="info" /></Label>
        <Label type="error"><Icon iconName="close" /></Label>
        <Label type="default"><Icon iconName="question_circled" /></Label>
      </Row>
      <Row>
        <Button assign="outlined" onClick={() => { setIsOpen1(true); }}>Open 1 Dialog</Button>
        <Button assign="outlined" onClick={() => { setIsOpen2(true); }}>Open 2 Dialog</Button>
        <Button assign="outlined" onClick={() => { setIsOpen3(true); }}>Open 3 Dialog</Button>
        <Button assign="outlined" onClick={() => { setIsOpen4(true); }}>Open 4 Dialog</Button>
        <Button assign="outlined" onClick={() => { setIsOpen5(true); }}>Open 5 Dialog</Button>
        <Dialog
          isOpen={isOpen1}
          onClose={handleClose}
        />
        <Dialog
          isOpen={isOpen2}
          onClose={handleClose}
          title="Заголовок модального окна"
        />
        <Dialog
          isOpen={isOpen3}
          onClose={handleClose}
          content="Тело модального окна"
        />
        <Dialog
          isOpen={isOpen4}
          onClose={handleClose}
          actions={<Actions onCancel={handleClose} onSubmit={handleClose} />}
          title="Заголовок модального окна"
          content="Тело модального окна"
        />
        <Dialog
          isOpen={isOpen5}
          onClose={handleClose}
          scrollable
          actions={<Actions onCancel={handleClose} onSubmit={handleClose} />}
          title="Заголовок модального окна"
          content={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum mi vel mauris venenatis laoreet. Fusce a congue magna. Sed vel lacus nunc. Aliquam porta consequat ipsum, sit amet semper urna posuere eget. Donec ullamcorper vestibulum libero, a pellentesque est laoreet sed. Pellentesque sit amet nulla dolor. Sed nec metus vitae justo fermentum mattis. Cras pharetra accumsan finibus. Duis maximus iaculis enim, eget pulvinar purus consequat a. Integer id arcu nec urna sodales bibendum. Quisque porttitor tortor nec arcu mattis bibendum. Fusce maximus congue nisl. Maecenas bibendum tellus eu rhoncus maximus. Nullam sagittis mauris fringilla lectus efficitur sodales. Pellentesque ac felis tellus. Donec commodo turpis eu massa vulputate, quis porttitor sem vulputate.
            
            
            Sed nec feugiat elit, at faucibus leo. Aliquam ligula metus, egestas vel nulla vel, tincidunt faucibus orci. Quisque sodales dictum dolor vitae condimentum. Sed consectetur metus diam, quis ultricies felis porta a. In molestie arcu in hendrerit tempus. Donec ut lectus nibh. Sed sagittis diam turpis, in malesuada sem rhoncus id. Maecenas sodales enim ac magna sollicitudin viverra. Vestibulum nec risus nisl. Donec lacinia vitae risus at maximus. Donec sed euismod augue. Maecenas varius lobortis posuere.
            
            
            Nulla facilisi. Ut vulputate sollicitudin pulvinar. Ut vulputate semper ante, non vulputate mauris ultricies eget. Proin commodo neque augue, quis aliquet elit tristique id. Proin dignissim urna eget sapien malesuada, in gravida odio venenatis. Vivamus urna ante, semper eu pretium sed, placerat id nulla. Vestibulum in leo eu tellus dignissim consectetur. Sed elit diam, ullamcorper faucibus enim sed, pellentesque tincidunt justo. Vivamus semper eleifend posuere.
            
            
            Donec vel quam id dui convallis convallis sit amet ac orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla quis libero at ante fringilla accumsan. Praesent in nulla nunc. Quisque sit amet erat non velit sagittis luctus. Donec placerat tincidunt congue. Aenean sit amet elit vitae nisl sodales varius at in metus. Suspendisse auctor aliquam felis, sit amet euismod nunc facilisis eget. Pellentesque id eleifend urna. Mauris eleifend tortor quis mi ullamcorper varius. Curabitur faucibus orci vitae eros bibendum placerat vitae ac orci. Nulla et vehicula mauris, tincidunt gravida risus. Integer congue sem in ex ornare, sit amet luctus elit molestie. Sed metus mi, dignissim id nulla vel, euismod luctus velit. Pellentesque pellentesque sem sapien, sit amet blandit nibh placerat nec.
            
            
            Sed aliquet eget nulla egestas vulputate. Sed vehicula suscipit tortor, dignissim tincidunt quam congue in. Phasellus pulvinar orci vitae justo convallis, a placerat purus varius. Phasellus vitae mi rutrum, dictum libero sit amet, consectetur nibh. Cras commodo est lectus, vehicula volutpat ex dictum a. Aenean nisi mi, interdum sit amet sapien imperdiet, euismod lacinia risus. Sed a blandit elit, sed aliquam mauris. In hac habitasse platea dictumst. Vivamus ipsum nibh, condimentum vitae fringilla in, euismod at justo. Etiam venenatis risus vitae ultrices bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tristique laoreet turpis, quis vestibulum velit efficitur ut. Vivamus tincidunt tincidunt enim, vel fringilla arcu vulputate pellentesque.
          `}
        />
      </Row>
    </div>
  );
}
