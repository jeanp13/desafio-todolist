import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 24,
  },

  header: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
    height: 150,
    width: '100%',
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#d9d9d9',
    padding: 16,
    fontSize: 16,
    marginRight: 6,

    p: {
      color: '#808080',
    },
  },

  inputActive: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#d9d9d9',
    padding: 16,
    fontSize: 16,
    marginRight: 6,
  },

  buttonText: {
    color: '#d9d9d9',
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonActive: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#4ea8de',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -55,
  },

  listEmptyText: {
    color: '#d9d9d9',
    fontSize: 14,
    textAlign: 'center',
  },

  textCreated: {
    color: '#4ea8de',
    alignContent: 'flex-end',
    paddingRight: 10,
  },

  textFinshed: {
    color: '#8284fa',
    paddingRight: 10,
  },

  textValue: {
    color: '#d9d9d9',
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  resume: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },

  groupCreated: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },

  groupDone: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    right: -50,
  },

  taskEmpty: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    top: 48,
  },

  clipboard: {
    height: 56,
    width: 56,
  },

  titleEmpty: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 16,
  },

  messageEmpty: {
    color: '#808080',
    fontSize: 14,
  },
});
