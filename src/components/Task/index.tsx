import { Image, Text, TouchableOpacity, View } from 'react-native';

import Checked from '../../../assets/Checked.png';
import Unchecked from '../../../assets/Unchecked.png';
import Trash from '../../../assets/Trash.png';
import TrashInativo from '../../../assets/TrashInactved.png';

import { styles } from './styles';

interface CardProps {
  done: boolean;
  text: string;
  active?: boolean;
  onCheck: () => void;
  onRemove: () => void;
}

export default function Task({ done, text, active, onCheck, onRemove }: CardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ckeck} onPress={onCheck}>
        {done ? <Image source={Checked} /> : <Image source={Unchecked} />}
      </TouchableOpacity>
      {done ? <Text style={styles.textDone}>{text}</Text> : <Text style={styles.text}>{text}</Text>}

      <TouchableOpacity onPress={onRemove}>
        {active ? <Image source={Trash} /> : <Image style={styles.trash} source={TrashInativo} />}
      </TouchableOpacity>
    </View>
  );
}
