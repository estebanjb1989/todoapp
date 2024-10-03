import styled from "styled-components/native";
import { Text, TextInput, ScrollView } from "react-native";

export const Container = styled(ScrollView)`
  padding: 16px 32px;
`;

export const NewItemContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
  gap: 12px;  
`;

export const TodoInput = styled(TextInput)`
  background-color: white;  
  padding: 4px;
  width: 100%;
`;

export const TodoList = styled.View`
  margin-top: 12px;
  gap: 12px;  
  
`;

export const ErrorText = styled(Text)`
  color: red;
`;
