import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TodoStack from "./TodoStack";

function Navigation() {  
  return (
    <NavigationContainer>
      <TodoStack />
    </NavigationContainer>
  );
}

export default Navigation;
