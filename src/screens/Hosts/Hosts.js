import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, TouchableOpacity,Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import hosts from '../../components/Hosts';
// import  Opendatabase hook
import {openDatabase} from "react-native-sqlite-storage";

// create constant object that refers to database 
const schedulerDB = openDatabase({name: 'Scheduler.db'});

//create constnat that contains the name of the lists table
consthostTableName = 'hosts';

const ListScreen = props => {

  const navigation = useNavigation();

  const [host,setHosts] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', ()=>{
      //declare empty array that will store results of SELECT 
      let results = [];
      // declare transaction that will execute SELECT
      schedulerDB.transaction(txn =>{
        //execute SELECT
        txn.executeSql(
          `SELECT * FROM ${hostsTableName}`,
          [],
          //callback function to handle results from SELECT 
          (_,res) =>{
            // get the number of rows selected
            let len = res.rows.length;
            console.log('Number of rows: ' + len);
            // if more than one row of data was selected 
            if (len > 0){
              //loop through the rows of data
              for (let i = 0; i < len; i++){
                //push a row of data at a time onto the results array
                let item = res.rows.item(i);

                color = ''
                //setting condition for high and low priority
                if (item.priority == 'HIGH'){
                color = 'red'
                }else{
                color = 'green'
                }
                
                
                
                results.push({
                  id: item.id,
                  name: item.name,
                  store: item.store,
                  date: item.date,
                  priority: item.priority,  
                  color_priority: color         
                });
              }
              //assign results array to lists state variable
              setLists(results);
            }else {
              setLists([]);
            }
          },
          error => {
            console.log('Error getting lists' + error.message);
          },
        )
      });
    });
    return listener;
  });
  
  return (
    <View style={styles.container}>
      <View>
        <FlatList
        data={lists}
        renderItem={({item}) => <List post={item} />}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Add List')}>
                <Text style={styles.buttonText}>Add List</Text>    
            </TouchableOpacity>
        </View>
    </View>
    
  );
};

export default ListScreen