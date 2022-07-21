import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext, GlobalProvider } from '../Context/GlobalState';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import GlobalDark from '../Styles/DarkStyle';
import Global from '../Styles/GlobalStyles';


const ListItem = ({ item,name, symbol, currentPrice, priceChangePercentage7d, logoUrl,onPress}) => {
    const scheme=useColorScheme()
    const {
        watchlist,
        addCoinToWatchlist,
        removeCoinFromWatchlist
      } = useContext(GlobalContext);
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    const ifExists = coin => {
        if (watchlist.filter(item => item.id === coin.id).length > 0) {
          return true;
        }
        return false;
      };

    return (
        <TouchableOpacity onPress={onPress}>
          <View style={Global.itemWrapper}>
            
            {/* Left side */}
            <View style={Global.leftWrapper}>
              <Image source={{ uri: logoUrl }} style={Global.image} />
              <View style={Global.titlesWrapper}>
                <Text style={scheme==='dark'?GlobalDark.title : Global.title}>{name}</Text>
                <Text style={scheme==='dark'?GlobalDark.subtitle: Global.subtitle}>{symbol.toUpperCase()}</Text>
              </View>
            </View>
    
            
            {/* Right side */}
            <View style={Global.rightWrapper}>
                <View style={Global.rightWrapper1}>
                    <Text style={scheme==='dark'?GlobalDark.title:Global.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[scheme==='dark'?GlobalDark.subtitle: Global.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
                <TouchableOpacity onPress={() => (ifExists(item) ? removeCoinFromWatchlist(item.id) :addCoinToWatchlist(item))}>
                    <AntDesign name={ifExists(item) ? 'eye':'eyeo'} size={26} color={'#1e4ded'} />
                </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        
      )
}



export default ListItem
