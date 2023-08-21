import {StatusBar, View} from "react-native";
import {Router} from "@src/router";

export const LayoutComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
        <Router />
      </View>
    </>
  )
}