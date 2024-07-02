import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  margin: ${({ theme }) => `${theme.spacing.base500} 0`};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

type TodoSectionProps = {
  children: React.ReactNode;
};

export const TodoSection: React.FC<TodoSectionProps> = ({
  children,
}: TodoSectionProps) => {
  return <Wrapper>{children}</Wrapper>;
};
