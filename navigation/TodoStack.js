import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "../view/TodoList";
import navigationRoutes from "./routes";

const Stack = createStackNavigator();

function TodoStack() {
  return (
    <Stack.Navigator
      name={navigationRoutes.todoStack.key}      
    >
      <Stack.Screen
        name={navigationRoutes.todoStack.list}
        component={TodoList}
        options={{
          title: "TODOList"
        }}
      />
    </Stack.Navigator>
  );
}

export default TodoStack;
