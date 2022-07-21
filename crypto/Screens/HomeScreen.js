
import React, { useCallback, useMemo, useRef,useState,useEffect } from 'react';
import { FlatList, StyleSheet, Text, View,TextInput,Appearance } from 'react-native';
import {  BottomSheetModal,  BottomSheetModalProvider,} from '@gorhom/bottom-sheet';
import Chart from '../Components/Chart';
import ListItem from '../Components/ListItem';
import { getMarketData } from '../Services/CryptoService';
import { auth } from '../Firebase';
import filter from 'lodash.filter';
import Global from '../Styles/GlobalStyles';
import GlobalDark from '../Styles/DarkStyle';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { EvilIcons } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  const scheme=useColorScheme()
  const [selectedCoinData, setSelectedCoinData] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
      setFullData(marketData);
    }
    fetchMarketData();
  }, [])


  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['45%'], []);

    const openModal = (item) => {
      setSelectedCoinData(item);
      bottomSheetModalRef.current?.present();
    }


    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, coin => {
          return contains(coin, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
      };
      
      const contains = ({name,symbol}, query) => {
        if (name.includes(query)||symbol.includes(query)) {
          return true;
        }
      
        return false;
      };

    function renderHeader() {
        return (
          <View
            style={scheme==='dark'?GlobalDark.searchWrapper:Global.searchWrapper}
          >
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              defaultValue={query}
              onChangeText={queryText => handleSearch(queryText)}
              placeholder="Search"
              style={scheme==='dark'?GlobalDark.search:Global.search}
            />
            <EvilIcons name="search" size={20} color="grey" />
          </View>
        );
      }

    
  return (
    <BottomSheetModalProvider>
    <View style={scheme==='dark'?GlobalDark.container:Global.container}>
      <View style={Global.titleWrapper}>
        <Text style={scheme==='dark'?GlobalDark.largeTitle : Global.largeTitle}>Markets</Text>
        <Text style={scheme==='dark'?GlobalDark.smallTitle :Global.smallTitle}>{auth.currentUser?.email}</Text>
      </View>
      <View style={Global.divider}></View>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={renderHeader}
        data={data}
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
      style={scheme==='dark'? GlobalDark.bottomSheet : Global.bottomSheet}         
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
  );
}

