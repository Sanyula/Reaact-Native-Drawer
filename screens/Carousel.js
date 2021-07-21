import React,{useState,useEffect} from 'react';
import {ScrollView, View,Text,StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;

const Carousel = (props) => {

    const [selectedItem,setSelectedItem] = useState(0);
    const [autoChange,setAutoChange]     = useState(false);
    const [description,setDescription]   = useState(false);
    const scrollRef = React.createRef();

    const images = [
        {
            url:require("../assets/images/image1.jpg"),
            title: "Star today1",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
        },
        {
            url:require("../assets/images/image2.jpg"),
            title: "Star today2",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
        },
        {
            url:require("../assets/images/image3.jpg"),
            title: "Star today3",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface "
        }
    ]

    useEffect( ()=>{
        autoScroll();
    },[autoChange])

    const autoScroll=()=>{
        let refIndex = selectedItem;
       setTimeout(() => {
            let newIndex = ( selectedItem==(images.length) -1)?0:(selectedItem+1);
            let newAuto = !autoChange;
            setSelectedItem(newIndex);
            setAutoChange(newAuto);
           // ;
        }, 5000);

        scrollRef.current.scrollTo({
            animated:true,
            y:0,
            x:DEVICE_WIDTH * refIndex
        });
        
    }

    //repeats whenever index changes automatically


    const setSelectedItemIndex = (event)=>{
        //get width
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //get current position
        const contentOffSet = event.nativeEvent.contentOffSet.x;
        const selected = Math.floor(contentOffSet/viewSize);
        setSelectedItem(selected);
        //setAutoChange(false);
    }

    return(


        <View style={styles.container}>
            <ScrollView  horizontal pagingEnabled 
            onMomentumScrollEnd={ (e)=>setSelectedItemIndex(e) }
            ref ={scrollRef}
            >
                {  
                    images.map( (image,index) =>{
                    return (
                        <ImageBackground style={styles.carouselItem} source={ image.url }  key={index}>
                            <View style={styles.description}>
                            <Text style={styles.desc}>{ image.description }</Text>
                            </View>
                        </ImageBackground>
        )
                            })
                }
            
            </ScrollView>

           
                <View style={styles.indicators} >
                   { 
                    images.map( (image,i) =>{
                            return (
                            <View 
                             key={"ind"+i} 
                             style={ [styles.indicator, {opacity: (i===selectedItem? 0.5:1)}] } />
                            )
                        })
                   }
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flex:1,
    },
    carouselItem:{
        width:DEVICE_WIDTH,
        height:"100%",
        flex:1
    },
    indicators:{
        position:'absolute',
        bottom:10,
        height:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:DEVICE_WIDTH,
    },
    indicator:{
        height:8,
        width:8,
        borderRadius:4,
        margin:5,
        position:'relative',
        backgroundColor:'#FFF',
        bottom:10
    },
    description:{
        position:'absolute',
        top:DEVICE_WIDTH,
        zIndex:2,
        width:DEVICE_WIDTH,
        alignItems:'center',
        justifyContent:'center'
    },
    desc:{
        color:'#FFF',
        textAlign:"center",
        padding:30,
        fontSize:17
    }
})

export default Carousel;