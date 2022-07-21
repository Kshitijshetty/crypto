import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState,useMemo } from 'react'
import { View, Text ,StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import ListItem from '../Components/ListItem';
import { GlobalContext } from '../Context/GlobalState';
import { auth } from '../Firebase'
import {  BottomSheetModal,  BottomSheetModalProvider,} from '@gorhom/bottom-sheet';
import Chart from '../Components/Chart';
import Global from '../Styles/GlobalStyles';
import GlobalDark from '../Styles/DarkStyle';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const ObserveScreen = () => {
    const scheme=useColorScheme()
    const [selectedCoinData, setSelectedCoinData] = useState(null);
    const {watchlist} = useContext(GlobalContext);

    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['45%'], []);

    const openModal = (item) => {
      setSelectedCoinData(item);
      bottomSheetModalRef.current?.present();
    }




    return (
    <BottomSheetModalProvider>
    <View style={scheme==='dark'?GlobalDark.container:Global.container}>
        <View style={Global.titleWrapper}>
            <Text style={scheme==='dark'?GlobalDark.largeTitle : Global.largeTitle}> Your Watchlist</Text>
        </View>
        <View style={Global.divider}></View>
        <FlatList 
        keyExtractor={(item)=>item.id}
        data={watchlist}
        renderItem={({ item })=>(
            <ListItem name={item.name} 
            item={item}
            id={item.id}
            symbol={item.symbol} 
            currentPrice={item.current_price} 
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency} 
            logoUrl={item.image}
            onPress={() => openModal(item)}
  />
        )}
      > 
      </FlatList>
    </View>
    <BottomSheetModal
      ref={bottomSheetModalRef}          
      index={0}          
      snapPoints={snapPoints} 
      style={Global.bottomSheet}         
    >          
        { selectedCoinData ? (
            <>
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            symbol={selectedCoinData.symbol}
            priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
            sparkline={selectedCoinData?.sparkline_in_7d.price}
          />
          </>
        ) : null}
    </BottomSheetModal>
    </BottomSheetModalProvider>
    )
}
  
export default ObserveScreen
