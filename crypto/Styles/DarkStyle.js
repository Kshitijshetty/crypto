import { StyleSheet } from 'react-native';

const GlobalDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
    largeTitle:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff'
      },
      smallTitle:{
        fontSize:16,
        fontWeight:"normal",
        color:'grey'
      },
      title: {
        fontSize: 18,
        color:'#fff'
      },
      subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "grey",
      },
      searchWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#1c1c1e', 
        padding: 10,
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius: 5
      },
      search:{
        backgroundColor: '#1c1c1e', 
        paddingHorizontal: 10,
      },
      bottomSheet: {
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
  
      },

})


export default GlobalDark