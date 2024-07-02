import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { FilterRow } from "./components/FilterRow";
import { Todo } from "./components/Todo";
import { TodoSection } from "./components/TodoSection";
import { SummaryRow } from "./components/SummaryRow";
import { FilterButton } from "./components/FilterButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background.app};
  background-image: ${({ theme }) => `url(${theme.images.background.mobile})`};
  background-size: 100% 200px;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: ${({ theme }) =>
    `url(${theme.images.background.desktop})`};
    background-size: 100% 300px;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  padding: ${({ theme }) => `0 ${theme.spacing.base700}`};
  width: min(100%, 600px);
`;

const Info = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding-top: ${({ theme }) => theme.spacing.base900};
  text-align: center;
`;

enum TodoFilter {
    All,
    Active,
    Completed,
}

type TodoItem = {
    id: string;
    description: string;
    isCompleted: boolean;
    order: number;
};

const exampleTodos: TodoItem[] = [
    {
        id: uuidv4(),
        description: "Share with Kolya",
        isCompleted: true,
        order: 0,
    }
    ];

function App() {
    const [currentTheme, setCurrentTheme] = useState(Themes.dark);
    const [todos, setTodos] = useState(exampleTodos);
    const [newTodo, setNewTodo] = useState("");
    const [currentFilter, setCurrentFilter] = useState(TodoFilter.All);
    const [dragId, setDragId] = useState("");

    const clearCompletedTodos = () => {
        const newTodos = todos.filter((todo) => !todo.isCompleted);

        setTodos(newTodos);
    };

    const getDisplayedTodos = () => {
        let displayedTodos: TodoItem[];

        switch (currentFilter) {
            case TodoFilter.Active:
                displayedTodos = todos.filter((todo) => !todo.isCompleted);
                break;
            case TodoFilter.Completed:
                displayedTodos = todos.filter((todo) => todo.isCompleted);
                break;
            // all
            default:
                displayedTodos = todos;
        }

        return displayedTodos;
    };

    const getIncompleteTodoCount = () => {
        let incompleteTodoCount = 0;

        getDisplayedTodos().forEach((todo) => {
            if (!todo.isCompleted) {
                incompleteTodoCount++;
            }
        });

        return incompleteTodoCount;
    };

    const getOrderMax = () => {
        return todos.reduce((a, b) => (a.order > b.order ? a : b)).order;
    };

    const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && newTodo.length > 0) {
            e.preventDefault();
            const createdTodo: TodoItem = {
                id: uuidv4(),
                description: newTodo,
                isCompleted: false,
                order: getOrderMax() + 1,
            };

            const newTodos = [...todos, createdTodo];

            setNewTodo("");
            setTodos(newTodos);
        }
    };

    const handleDeleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);

        setTodos(newTodos);
    };

    const handleDrag = (id: string) => {
        setDragId(id);
    };

    const handleDrop = (id: string) => {
        //! indicates to TS todo will not be undefined
        const dropTodo = todos.find((todo) => todo.id === id)!;

        const dropTodoOrder = dropTodo.order;

        const newTodos = todos.map((todo) => {
            //change order for todos below where dragged todo was dropped
            if (todo.order >= dropTodoOrder) {
                todo.order++;
            }

            if (todo.id === dragId) {
                todo.order = dropTodoOrder;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const handleTodoFilterAll = () => {
        setCurrentFilter(TodoFilter.All);
    };

    const handleTodoFilterActive = () => {
        setCurrentFilter(TodoFilter.Active);
    };

    const handleTodoFilterCompleted = () => {
        setCurrentFilter(TodoFilter.Completed);
    };

    const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleTodoCheckChange = (id: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            } else {
                return todo;
            }
        });

        setTodos(newTodos);
    };

    const toggleTheme = () => {
        currentTheme.name === "dark"
            ? setCurrentTheme(Themes.light)
            : setCurrentTheme(Themes.dark);
    };

    return (
    <>
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Wrapper>
                <StyledApp>
                    <Header
                        toggleTheme={toggleTheme}
                        toggleImageSrc={currentTheme.images.toggle}
                    />
                    <AddTodo
                        addTodo={handleAddTodo}
                        onChange={handleNewTodoChange}
                        placeholder={"Create a new todo..."}
                        value={newTodo}
                    />
                    <TodoSection>
                        {getDisplayedTodos()
                            .sort((a, b) => a.order - b.order)
                            .map((todo) => {

                                return (
                                    <Todo
                                        key={todo.id}
                                        id={todo.id}
                                        handleDrag={handleDrag}
                                        handleDrop={handleDrop}
                                        onComplete={handleTodoCheckChange}
                                        onDelete={handleDeleteTodo}
                                        isChecked={todo.isCompleted}
                                        text={todo.description}
                                    />
                                );
                            })}
                        <SummaryRow
                            onClick={clearCompletedTodos}
                            itemCount={getIncompleteTodoCount()}
                        >
                            <FilterButton
                                isActive={currentFilter === TodoFilter.All}
                                onClick={handleTodoFilterAll}
                                text={"All"}
                            />
                            <FilterButton
                                isActive={currentFilter === TodoFilter.Active}
                                onClick={handleTodoFilterActive}
                                text={"Active"}
                            />
                            <FilterButton
                                isActive={currentFilter === TodoFilter.Completed}
                                onClick={handleTodoFilterCompleted}
                                text={"Completed"}
                            />
                        </SummaryRow>
                    </TodoSection>
                    <FilterRow>
                        <FilterButton
                            isActive={currentFilter === TodoFilter.All}
                            onClick={handleTodoFilterAll}
                            text={"All"}
                        />
                        <FilterButton
                            isActive={currentFilter === TodoFilter.Active}
                            onClick={handleTodoFilterActive}
                            text={"Active"}
                        />
                        <FilterButton
                            isActive={currentFilter === TodoFilter.Completed}
                            onClick={handleTodoFilterCompleted}
                            text={"Completed"}
                        />
                    </FilterRow>
                    <Info>Drag and drop to reorder list</Info>
                </StyledApp>
            </Wrapper>
        </ThemeProvider>
    </>
  )
}

export default App
