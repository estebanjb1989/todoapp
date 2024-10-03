import styled from "styled-components/native";
import { TouchableOpacity } from "react-native"

export const Container = styled.View`
  padding: 16px 12px;
  background-color: white;
  border-radius: 4px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const TextContainer = styled.View`
  margin-bottom: 12px;
`

export const ActionButton = styled(TouchableOpacity)`
  
`;

export const QuoteLabel = styled.Text`
  font-style: italic;
  margin-top: 12px;
`

export const AuthorLabel = styled.Text`
  margin-top: 6px;
  font-size: 12px;
`

export const DoneBadge = styled.Text`
  background-color: green;
  color: white;
  width: 48px;
  text-align: center;
  font-size: 13px;
  padding: 4px;
  border-radius: 4px;
`