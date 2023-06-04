import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/logo.png"
import Arrow from "../../../assets/arrow.png"
import PraiaGunga from "../../../assets/PraiaGunga.png"
import botaoDetalhes from "../../../assets/botaoDetalhes.png"


export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.ArrowTrip} source={Arrow}/>
            </TouchableOpacity>
                <Text style= {styles.TituloTrip}> Praia do Gunga - AL </Text>                
                <Image style={styles.logoTrip} source={Logo}/>
            </View>

            <Image style= {styles.ImageViagem} source={PraiaGunga} />

            <Text style= {styles.Descricao}> Descrição: </Text>
            <Text style= {styles.TextDescricao}> A Praia do Gunga está localizada a 20 milhas ao sul de Maceió, Alagoas. 
            É considerada uma das praias mais bonitas do Brasil. 
            A praia é cercada por coqueiros e fica bem entre o Oceano Atlântico e a Lagoa do Roteiro. 
            Para saber mais, clique em detalhes logo abaixo.</Text>
            
            <View style = {styles.infoGuia}>
                <Text style= {styles.nomeGuia}> William Ribeiro </Text>
                <Text style= {styles.descricaoGuia}> Guia turístico com mais de 10 anos de experiência. </Text>
                <Text style= {styles.valorGuia}> R$500,00 </Text>
            </View>
            <View style={styles.infoViagem}>
                <Text style={styles.dataDia}> 01/03/2023</Text>                
                <Text style={styles.dataDia}> 3 dias </Text>
            </View>
            <View style={styles.infoViagem}>
                <Text style= {styles.dataValorDia}> 15 pessoas </Text>                
                <TouchableOpacity>
                <Image style={styles.botaoDetalhes} source={botaoDetalhes}/>
            </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        alignItems: "flex-start",
    },

    header: {
        backgroundColor: "#0D1E30",
        width: "100%",
        paddingTop: 80,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    TituloTrip: {
        
        color: "#FFFFFF",
        marginLeft: 50,
    },

    ArrowTrip: {
        width: 25,
        height: 25,
        marginLeft: -10,
    },

    logoTrip: {
        width: 30,
        height: 30,
        marginBottom: 20,
        marginLeft: 30,
    },

    ImageViagem: {
        width: 500,
        height: 250,
    },

    Descricao: {
        marginTop: 10,
        marginLeft: 10,
    },

    TextDescricao: {
        marginTop: 10,
        marginLeft: 10,
    },

    infoGuia: {
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: "black",
    },

    nomeGuia: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },

    valorGuia: {
        backgroundColor: "#0D1E30",
        marginTop: 10,
        color: "white",
        marginLeft: 200,
        marginRight: 50,
        paddingLeft: 20,
    },

    infoViagem: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 10,
        
    },

    dataValorDia: {
        color: "#757575",
    },

    dataDia: {
        color: "#757575",
        marginRight: 35,
    },

    botaoDetalhes: {
        width: 110,
        height: 30,
        marginLeft: 15,
    }


})