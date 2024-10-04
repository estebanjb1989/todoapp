import { useEffect, useState, useCallback, useRef } from "react"
import { Button } from "react-native"

import { useTodoStore } from "../../state/store"
import { TodoListItem } from '../../component';
import { getRandomQuote } from "../../api/quotable"

import {
  Container,
  TodoInput,
  TodoList,
  NewItemContainer,
  ErrorText
} from "./styles"

export default function TodoListView() {
  const textInputRef = useRef(null)
  const [currentText, setCurrentText] = useState("")
  const [currentError, setCurrentError] = useState(null)
  const [loading, setLoading] = useState(false)

  const list = useTodoStore(state => (
    state.list
  ))

  const push = useTodoStore(state => (
    state.push
  ))

  const remove = useTodoStore(state => (
    state.remove
  ))

  const exists = useTodoStore(state => (
    state.exists
  ))

  const done = useTodoStore(state => (
    state.done
  ))

  const doneCallback = useCallback(async (item) => {
    try {
      setLoading(item)
      const randomQuote = await getRandomQuote()
      const ticks = Date.now()
      done({ ...item, quote: randomQuote, ticks })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(null)
    }
  }, [done])

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  useEffect(() => {
    handleFocus()
  }, [])

  const handleNewItem = useCallback(() => {
    if (!currentText?.trim()?.length) {
      setCurrentError("Task description is required")
      handleFocus()
      return
    }

    if (currentText?.trim()?.length < 3) {
      setCurrentError("Task description too short")
      handleFocus()
      return
    }

    if (exists({ text: currentText })) {
      setCurrentError("Task already exists")
      handleFocus()
      return
    }

    setCurrentText("")
    setCurrentError(null)
    push(currentText)
    handleFocus()

  }, [currentText])

  return (
    <Container>
      <NewItemContainer>
        <TodoInput
          ref={textInputRef}
          value={currentText}
          onChangeText={(text) => setCurrentText(text)}
        />
        <Button title="Add Task" onPress={handleNewItem} />
      </NewItemContainer>

      {currentError ? (
        <ErrorText>{currentError}</ErrorText>
      ) : null}

      <TodoList>
        {list
          .filter(item => !item.status)
          .map(item => (
            <TodoListItem
              key={item.text}
              item={item}
              removeCallback={remove}
              doneCallback={doneCallback}
              loading={loading}
            />
          ))}
        {list
          .filter(item => item.status)
          .sort((a, b) => {
            if (a.ticks > b.ticks) return -1;
            if (a.ticks < b.ticks) return 1;
            return 0;
          })
          .map(item => (
            <TodoListItem
              key={item.text}
              item={item}
              removeCallback={remove}
              doneCallback={doneCallback}
              loading={loading}
            />
          ))}
      </TodoList>
    </Container>
  );
}
