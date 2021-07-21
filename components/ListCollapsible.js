import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import HistoryItem from './HistroyItem';

const ListCollapsible = ()=>{

    return(
        <Collapse style={ styles.collapsible }>
            <CollapseHeader>
              <View class={styles.container}>
                    <View style={styles.left}>
                        <Text>History Item History Item</Text>
                        <Text>History Item</Text>
                        <Text>History Item</Text>
                        <Text>History Item</Text>
                    </View>
                    <View style={styles.right}>
                            <Text>SUCCESSFULL</Text>
                    </View>
                </View>
                </CollapseHeader>
                <CollapseBody>
                  <HistoryItem />
                </CollapseBody>
        </Collapse>
    )

}

const styles = StyleSheet.create({

    collapsible:{
        margin:10,
        elevation:8,
        borderBottomColor:'#EEE',
        borderBottomWidth:1,
        marginBottom:2,
        borderRadius:8,
        backgroundColor:'#FFF',
        justifyContent:"center",
    },
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

export default ListCollapsible;