import { Image, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { useState } from 'react';
import IconButtonAdd  from '../../../assets/IconButton.png';

import style from './styles'



const ButtonAddTask = () => {

  const [modalShow, setModalShow] = useState(false);

  const activeModal = () => {
    setModalShow(true)
  };

  const inactiveModal = () => {
    setModalShow(false)
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={activeModal} style={style.buttonAdd}>
        <Image source={IconButtonAdd} style={style.iconButton} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ButtonAddTask;