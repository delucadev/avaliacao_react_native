import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title:{
       fontSize: 48,
       color: "#0c0c0cdd",
       marginBottom: 10,
       fontWeight: "bold"  
    },
    input:{
        width: "80%",
        marginTop: 20,
        padding: 10, 
        height: 50,
        borderRadius: 10,
        backgroundColor: "#F1F1F1",       
        marginLeft: "auto",
        marginRight: "auto",
    },
    btnCad:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 30,
        backgroundColor: "#0c0c0c",
    },
    textBtnCad:{
        color:"#FFFFFF"
    },
    alertContent:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    warningAlert:{
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16
    },
    linkVoltar:{
        marginTop:20,
        color: "#1877f2",
        fontSize: 16,
    }
});

export default styles;