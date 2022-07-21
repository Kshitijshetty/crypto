import { StyleSheet } from 'react-native';

const Global = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    largeTitle:{
      fontSize:24,
      fontWeight:"bold",
    },
    smallTitle:{
      fontSize:16,
      fontWeight:"normal",
      color:'#A9ABB1'
    },
    titleWrapper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:50,
      paddingHorizontal:16,
      paddingBottom:5,
    },
    divider:{
      height:StyleSheet.hairlineWidth,
      backgroundColor:"gray",
      marginHorizontal:16,
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,

    },
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop:16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
      },
      leftWrapper: {
        flexDirection: "row",
        alignItems: 'center',
      },
      image: {
        height: 48,
        width: 48,
      },
      titlesWrapper: {
        marginLeft: 8,
      },
      title: {
        fontSize: 18,
      },
      subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",
      },
      rightWrapper: {
        flexDirection: "row",
      },
      rightWrapper1:{
          alignItems: 'flex-end',
          flexDirection:"column",
          paddingRight:10,
      },
      searchWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#e8e8e8',
        padding: 10,
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius: 5
      },
      search:{
        backgroundColor: '#e8e8e8', 
        paddingHorizontal: 10,
      }
  });

  
  export default Global