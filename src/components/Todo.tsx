import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.text.secondary};
  gap: ${({ theme }) => theme.spacing.base400};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: ${({ theme }) => theme.spacing.base600};
    padding: ${({ theme }) =>
      `${theme.spacing.base600} ${theme.spacing.base700}`};

    & button img {
      display: none;
    }

    &:hover button img {
      display: block;
      height: ${({ theme }) => theme.fontSize.base300};
    }
  }

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    height: ${({ theme }) => theme.fontSize.base100};
  }
`;

const TodoText = styled.div<TodoTextProps>`
  background-color: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.text.secondary : theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  flex: 1;

  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "")};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base400};
    padding: ${({ theme }) =>
      `${theme.spacing.base100} 0 ${theme.spacing.base100}`};
  }
`;

type TodoProps = {
  handleDrag: (id: string) => void;
  handleDrop: (id: string) => void;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  id: string;
  isChecked: boolean;
  text: string;
};

type TodoTextProps = {
  isChecked: boolean;
};

export const Todo: React.FC<TodoProps> = ({
  handleDrag,
  handleDrop,
  onComplete,
  onDelete,
  id,
  isChecked,
  text,
}: TodoProps) => {
  return (
    <Wrapper
      id={id}
      draggable={true}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() => handleDrag(id)}
      onDrop={() => handleDrop(id)}
    >
      <Checkbox
        onChange={() => onComplete(id)}
        isChecked={isChecked}
        isDisabled={false}
      />
      <TodoText isChecked={isChecked}>{text}</TodoText>
      <button onClick={() => onDelete(id)}>
        <img src="images/icon-cross.svg" alt="delete" />
      </button>
    </Wrapper>
  );
};
