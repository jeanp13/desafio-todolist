import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 8,
    borderRadius: 12,
    marginBottom: 8,
    width: '100%',
  },

  text: {
    fontSize: 14,
    color: '#f2f2f2',
    width: '80%',
    paddingLeft: 8,
  },

  textDone: {
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
    width: '80%',
    paddingLeft: 8,
  },
  trash: {
    // right: 24,
    margin: 8,
    width: 32,
    height: 32,
  },
  ckeck: {},
});
