import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    circleview:{
        width: 94,
        height: 94,
        borderRadius: 100,
        padding: 3,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:5,
        marginTop: 10,
    },
    inneimgview:{
        height: 90,
        width: 90,
        borderRadius: 100,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        overflow: 'hidden',
    },
    innerimg:{
        height: 90, 
        width: 90, 
        borderRadius: 100
    }
})

export{styles}