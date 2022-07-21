import React, { createContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'
import { GlobalProvider } from './Context/GlobalState'
import { auth } from './Firebase'
import DrawerNav from './Navigation/Drawer'
import LoginScreen from './Screens/LoginScreen'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
export const AuthContext = createContext(null)
const App = () => {
  const scheme=useColorScheme()
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  function onAuthStateChanged(result) {
    setUser(result)
    if (initializing) setInitializing(false)
  }
  useEffect(() => {
    const authSubscriber = auth.onAuthStateChanged(onAuthStateChanged)

    return authSubscriber
  }, [])

  if (initializing) {
    return null
  }
  if(user){
    return(
      <AppearanceProvider>
      <AuthContext.Provider value={user}>
        <GlobalProvider>
        <DrawerNav />
        </GlobalProvider>
      </AuthContext.Provider>
      </AppearanceProvider>
      )
  }else{
    return (<LoginScreen />)
  }
  
}

export default App
