import { Text, ActivityIndicator, TouchableOpacity } from "react-native"
import {
  Container,
  ButtonsContainer,
  TextContainer,
  QuoteLabel,
  AuthorLabel,
  DoneBadge,
  TimeAgoLabel,
  TimeAgoContainer
} from './styles'
import { getTimeAgoFromTS } from "../../../helper/date"
import Ionicons from '@expo/vector-icons/Ionicons'

export const TodoListItem = ({
  item,
  removeCallback,
  doneCallback,
  loading
}) => {
  const handleRemove = (item) => () => {
    removeCallback(item)
  }

  const handleDone = (item) => () => {
    doneCallback(item)
  }

  return (
    <Container key={item.text}>
      {item.ticks ?
        <TimeAgoContainer>
          <TimeAgoLabel>{getTimeAgoFromTS(item.ticks)}</TimeAgoLabel>
        </TimeAgoContainer>
        : null}
      <TextContainer>
        <Text>{item.text}</Text>
      </TextContainer>
      {item.status ? (
        <>
          <DoneBadge>DONE</DoneBadge>
          <QuoteLabel fontStyle="italic">{item.quote?.content}</QuoteLabel>
          <AuthorLabel>{item.quote?.author}</AuthorLabel>
        </>
      ) : (
        <ButtonsContainer>
          <TouchableOpacity disabled={!!loading} onPress={handleRemove(item)}>
            <Ionicons name="remove-circle" size={21}
              color={loading?.id === item.id ? "grey" : "red"} />
          </TouchableOpacity>

          <TouchableOpacity disabled={!!loading} onPress={handleDone(item)}>
            {loading?.id === item.id ? <ActivityIndicator /> :
              <Ionicons name="checkmark-circle" size={21} color="green" />
            }
          </TouchableOpacity>
        </ButtonsContainer >
      )}

    </Container>
  )
}