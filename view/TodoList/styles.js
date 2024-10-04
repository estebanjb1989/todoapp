import styled from "styled-components/native";
import { Text, TextInput, ScrollView } from "react-native";

export const Container = styled(ScrollView)`
  padding: 12px 32px 64px 32px;
`;

export const NewItemContainer = styled.View`
  flex-direction: row;  
  align-items: center;
  justify-content: space-between;
  gap: 12px;    
`;

export const TodoInput = styled(TextInput)`
  background-color: white;  
  padding: 8px;
  flex: 1;
`;

export const TodoList = styled.View`
  margin-top: 12px;
  gap: 12px;    
`;

export const ErrorText = styled(Text)`
  color: red;
`;

export const Filler = styled.View`
  height: 120px;
`