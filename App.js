import React from 'react';
import { Dimensions, View,Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import { Feather } from '@expo/vector-icons';
import {
  ProfileScreen,
  HomeScreen,
  MessagesScreen,
  ActivityScreen,
  ReportScreen,
  ResetScreen,
  StatisticsScreen
} from  './screens';

import Sidebar from './components/SideBar'
import Carousel from './screens/Carousel';

const tintColor = "#485756";
const activeMenuBgColor = "rgba(16, 173, 171,0.2)";

const DrawerNavigator = createDrawerNavigator({
  HomeScreen:{
    screen:HomeScreen,
    name:"Home",
    navigationOptions:{
      title:'Home',
      drawerIcon: ( {iconColor} )=> <Feather name="home" size={16} color={iconColor} />
    }
  },
  ProfileScreen:{
    screen:ProfileScreen,
    navigationOptions:{
      title:'Profile',
      drawerIcon: ( {iconColor} )=> <Feather name="user" size={16} color={iconColor} />
    }
  },
  ActivityScreen:{
    screen:ActivityScreen,
    navigationOptions:{
      title:'Activities',
      drawerIcon: ( {iconColor} )=> <Feather name="activity" size={16} color={iconColor} />
    }
  },
  StatisticsScreen:{
    screen:StatisticsScreen,
    navigationOptions:{
      title:'Statistics',
      drawerIcon: ( {iconColor} )=> <Feather name="trending-up" size={16} color={iconColor} />
    }
  },
  ReportScreen:{
    screen:ReportScreen,
    navigationOptions:{
      title:'Reports',
      drawerIcon: ( {iconColor} )=> <Feather name="bar-chart" size={16} color={iconColor} />
    }
  },
  MessagesScreen:{
    screen:MessagesScreen,
    navigationOptions:{
      title:'Messages',
      drawerIcon: ( {iconColor} )=> <Feather name="message-circle" size={16} color={iconColor} />
    }
  },
  ResetScreen:{
    screen:ResetScreen,
    navigationOptions:{
      title:'Reset Password',
      drawerIcon: ({iconColor})=> <Feather name="lock" size={16} color={iconColor} />
    }
  }
},{
   contentComponent: props =><Sidebar {...props} />,
    drawerWidth:Dimensions.get("window").width * 0.9,
    hideStatusBar:true,
    swipeEdgeWidth:50,
    contentOptions:{
      activeBackgroundColor:activeMenuBgColor,
      activeTintColor: tintColor,
      itemsContainerStyle: {
        marginTop:16,
        marginHorizontal:8
      },
      itemStyle:{
        borderRadius:8,
        fontSize:13
      }
    }
  }
);

 //Conditional render
 /*
let  app = ()=>{
  return ( <Carousel />)
}
if(false){
  app = createAppContainer( DrawerNavigator );
}
*/
let app = createAppContainer( DrawerNavigator );
export default app ;
