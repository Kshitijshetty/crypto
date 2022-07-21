import React, { createContext, useReducer, useEffect } from "react";
import CoinReducer from "./CoinReducer";
const initialState = {
    watchlist:[],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(CoinReducer, initialState);

    const addCoinToWatchlist = (coin) => {
        dispatch({ type: "ADD_COIN_TO_WATCHLIST", payload: coin });
      };
    
    const removeCoinFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_COIN_FROM_WATCHLIST", payload: id });
      };


    return (
        <GlobalContext.Provider
          value={{
            watchlist: state.watchlist,
            addCoinToWatchlist,
            removeCoinFromWatchlist,
          }}
        >
          {props.children}
        </GlobalContext.Provider>
      );
}  