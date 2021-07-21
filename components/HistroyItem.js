import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const HistoryItem = ()=>{

    return(
        <View class={styles.container}>
            <View style={styles.left}>
                <Text>History Item</Text>
            </View>
            <View style={styles.right}>
                <Text>SUCCESSFULL</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:30,
        elevation:6,
        alignItems:"center",
        display:'flex',
    },
    left:{
        alignItems:'flex-start',
        padding:10,
        justifyContent:'center',
    },
    right:{
        alignItems:'flex-end',
        padding:10,
        top:-50,
        paddingBottom:0,
        justifyContent:'center',
    }
})

export default HistoryItem;
