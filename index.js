/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const HomeScreen = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 0.0}} />
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome to Scheduler
            <Text style={styles.description}>
              {'\n' + '\n'}Shopper is a cross platform mobile application built
              using React Native.
            </Text>
            <Text style={styles.description}>
              {'\n' + '\n'}It maintains its data using an SQLite database.
            </Text>
            <Text style={styles.description}>
              {'\n' + '\n'}It allows its users to add, view, update, and delete
              meetings.
            </Text>
          </Text>
        </View>
        <View style={styles.bottom}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Start Scheduling!')}>
            <Text style={styles.buttonText}>Start Scheduling!</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default HomeScreen;