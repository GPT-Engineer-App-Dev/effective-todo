import { useState } from "react";
import { Box, Button, Input, List, ListItem, Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "No input",
        description: "Please enter a todo item.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Todo App
      </Text>
      <Box minW="300px">
        <Input placeholder="Add a new todo" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(event) => event.key === "Enter" && handleAddTodo()} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddTodo} mt={2}>
          Add Todo
        </Button>
      </Box>
      <List spacing={3} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center" p={2} boxShadow="md">
            <Text>{todo}</Text>
            <IconButton icon={<FaTrash />} aria-label="Delete todo" colorScheme="red" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
