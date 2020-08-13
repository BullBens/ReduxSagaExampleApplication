import React from 'react';
import {View, Text, TouchableOpacity} from '@components';
import styles from './styles';
import {connect} from 'react-redux';
import {TGlobalState} from 'src/types';
import {
  incrementAppGlobalState,
  decrementAppGlobalState,
} from '@reducers/appGlobalState';
import {getUsers} from '@reducers/users';
import {useEffect} from '@hooks';
import {ScrollView} from 'react-native-gesture-handler';

const Chat: React.FC<TProps> = ({appGlobalState, dispatch, users}) => {
  useEffect(() => {
    debugger;
  }, [users]);

  const increment = () => {
    dispatch(incrementAppGlobalState(appGlobalState.counter));
  };
  const decrement = () => {
    dispatch(decrementAppGlobalState(appGlobalState.counter));
  };

  const getUsersData = () => {
    dispatch(getUsers());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{`Value: ${appGlobalState.counter}`}</Text>
      <View style={styles.incrementOrDecrementView}>
        <TouchableOpacity onPress={decrement} style={styles.btnStyle}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment} style={styles.btnStyle}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={getUsersData} style={styles.btnStyle}>
        <Text style={styles.btnText}>Get users</Text>
      </TouchableOpacity>
      <ScrollView>
        {users?.map((item) => (
          <Text
            key={item.id}
            style={styles.value}>{`${item.first_name} ${item.last_name}`}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  appGlobalState: state.appGlobalState,
  users: state.users,
});

export default connect(mapStateToProps)(Chat);

type TProps = {
  dispatch: any;
  appGlobalState: TGlobalState['appGlobalState'];
  users: TGlobalState['users'];
};
