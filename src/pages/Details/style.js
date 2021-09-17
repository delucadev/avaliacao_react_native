import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    label:{
        width:"90%",
        marginTop:20,
        marginLeft:20,
        fontSize: 16,
        color: "#0c0c0cdd", 
        fontWeight: "bold"
    },
    input:{
        width: "90%",
        marginTop: 10,
        padding: 10, 
        height: 50,
        borderRadius: 10,
        backgroundColor: "#F1F1F1",       
        marginLeft: "auto",
        marginRight: "auto",
    },
    btnNewTask:{
        width: 60,
        height: 60, 
        position: "absolute",
        bottom: 30, 
        right:30,
        backgroundColor: "#05EB6C",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
    
});

export default styles;