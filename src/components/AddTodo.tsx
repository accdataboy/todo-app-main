import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  gap: ${({ theme }) => theme.spacing.base400};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: ${({ theme }) => theme.spacing.base600};
    padding: ${({ theme }) =>
      `${theme.spacing.base600} ${theme.spacing.base700}`};
  }
`;

const Input = styled.input.attrs({ type: "text" })`
  border: none;
  background-color: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  min-width: 0; /* inputs come with a min-width > 0 so need to set at 0 then set width to 100% so it'll shrink as expected */
  flex: 1;
  caret-color: ${({ theme }) => theme.color.text.accent};

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base400};
  }
`;

type AddTodoProps = {
  addTodo: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export const AddTodo: React.FC<AddTodoProps> = ({
  addTodo,
  onChange,
  placeholder,
  value,
}: AddTodoProps) => {
  return (
    <Wrapper>
      <Checkbox onChange={() => ""} isChecked={false} isDisabled={true} />
      <Input
        onChange={onChange}
        onKeyUp={addTodo}
        placeholder={placeholder}
        value={value}
      />
    </Wrapper>
  );
};
