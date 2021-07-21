import React from 'react';
import {ScrollView, View,Text,StyleSheet, FlatList} from 'react-native';

import ListCollapsible from '../components/ListCollapsible';
import { List,TextInput } from 'react-native-paper';


const Home = () => {

    const getColor = ()=>{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const transactions = [
        {
            name:"Africel Airtime",
            amount: 90000,
            date:'2021,05,03',
            status:'200'
        },
        {
            name:"Mango Airtime",
            amount: 4000,
            date:'2021,05,03',
            status:'240',
            ref:"67659898987"
        },
        {
            name:"Safaricom Airtime",
            amount: 30000,
            date:'2021,05,03',
            status:'200',
            ref:"67659008987"
        },{
            name:"Airtel Airtime",
            amount: 450000,
            date:'2021,05,03',
            status:'200',
            ref:"6760098987"
        },
        {
            name:"Vodafone Airtime",
            amount: 450000,
            date:'2021,05,03',
            status:'400',
            ref:"67650078987"
        },
        {
            name:"UTL Airtime",
            amount: 450000,
            date:'2021,05,03',
            status:'500',
            ref:"6765009898987"
        },
        {
            name:"Vodafone Airtime",
            amount: 450000,
            date:'2021,05,03',
            status:'400',
            ref:"67659890097"
        },
        {
            name:"UTL Airtime",
            amount: 450000,
            date:'2021,05,03',
            status:'500',
            ref:"60059898987"
        }
    ]

  const renderTransaction = (item,index)=>{
          
            return(
            <List.Item
                style ={ styles.listItem }
                title= { item.name }
                key={index}
                description= { 
                <View>
                    <Text style={styles.date}> { item.date }</Text> 
                    <Text> #766776877</Text> 
                    <Text style={styles.amount}> UGX {item.amount}</Text>
                </View>}
                left={props => <View style={ styles.centered }>
                        <View style={[styles.icon,{backgroundColor: getColor()}] }>
                            <Text style={ {color:"#fff"} }>{ item.name[0] }</Text>
                        </View>
                    </View>}
                right={props => <View style={ styles.centered }>
                   { 
                   (item.status=="200")? <Text style={ styles.success}>SUCCESSFULL</Text> 
                   :
                   <Text style={ styles.failed}>FAILED</Text> 
                   }
                 </View>}
            />);
    }

 return(
     <View style={{backgroundColor:'#FFF', flex:1,padding:10}}>
        {/* <ListCollapsible /> */}
        <List.Subheader >My Transactions</List.Subheader>

        <TextInput
            label="Search Transaction"
            placeholder="Search here"
            mode="outlined"
            />

        <FlatList
          data = {transactions}
          renderItem={({ item, index, separators })=>renderTransaction(item,index)}
        />
    
     </View>
 )
}

const styles = StyleSheet.create({
    icon:{
        justifyContent:"center",
        backgroundColor:"#EEE",
        alignItems:"center",
        padding:15,
        height:50,
        width:50,
        borderRadius:50
    },
    listItem:{
        borderBottomWidth:1,
        borderBottomColor:'#EEE'
    },
    centered:{
        justifyContent:"center",
        alignItems:"center",
    },
    success:{
        color:"green",
        fontSize:14
    }
    ,
    failed:{
        color:"maroon",
        fontSize:14
    },
    date:{
        fontSize:12,
        color:"#212222"
    },
    amount:{
        fontWeight:"600",
        letterSpacing:1
    }
})

export default Home;