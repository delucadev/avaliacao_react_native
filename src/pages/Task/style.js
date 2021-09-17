import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F1F1F1",
        paddingTop: 20
    },
    buttonNewTask:{
        width: 60,
        height: 60, 
        position: "absolute",
        bottom: 30, 
        right:30,
        backgroundColor: "#D9042B",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    tasks:{
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 10,
        // backgroundColor: "#000"
    },
    deleteTask:{
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: "#D8D6D5",
    },
    descriptionTask:{
        width: "80%",
        height: "100%",
        alignContent: "flex-start",
        backgroundColor: "#D8D6D5",
        padding: 12,
        borderRadius: 10,
        marginBottom: 5,
        marginRight:15,
        color: "#2b2b2da5"
    }
});

export default styles;