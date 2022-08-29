import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/Logo.png';
import clipboard from '../../assets/Clipboard.png';

import { styles } from './styles';
import Task from '../components/Task';

type Task = {
  id: string;
  text: string;
  done: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    // {
    //   id: 'cdscsdc a',
    //   text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    //   done: false,
    // },
    // {
    //   id: 'wweff3fe',
    //   text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    //   done: true,
    // },
  ]);

  const [created, setCreated] = useState(0);
  const [done, setDone] = useState(0);
  const [task, setTask] = useState('');

  function handleTaskAdd() {
    if (task.trim() !== '' && task !== undefined) {
      const t = { id: new Date().getTime().toString(), text: task, done: false };
      setTasks((prevState) => [...prevState, t]);
      setCreated(created + 1);
    }
    // setCreated(tasks.length);
    setTask('');
  }

  function handleCheck(id: string) {
    setTasks((prevState) =>
      prevState.filter(async (t) => {
        if (t.id === id) {
          t.done = !t.done;
          if (t.done) {
            setDone((prevState) => prevState + 1);
          } else {
            setDone((prevState) => prevState - 1);
          }
        }
        return t;
      })
    );
  }

  function handleRemove(task: Task) {
    setTasks((prevState) => prevState.filter((t) => t.id !== task.id));
    if (task.done) {
      setDone(done - 1);
    }
    setCreated(created - 1);
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={'Adicione uma nova tarefa'}
            placeholderTextColor={'#808080'}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Icon style={styles.buttonText} name="plus-circle" color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.resume}>
          <View style={styles.groupCreated}>
            <Text style={styles.textCreated}>Criadas</Text>
            <Text style={styles.textValue}>{created}</Text>
          </View>
          <View style={styles.groupDone}>
            <Text style={styles.textFinshed}>Concluídas</Text>
            <Text style={styles.textValue}>{done}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(t) => t.id}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              done={item.done}
              text={item.text}
              onCheck={() => handleCheck(item.id)}
              onRemove={() => handleRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.taskEmpty}>
              <Image style={styles.clipboard} source={clipboard} />
              <Text style={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.messageEmpty}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
