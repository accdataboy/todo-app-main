import styled from "styled-components";

const Button = styled.button<StyleProps>`
  background-color: transparent;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.text.accent : theme.color.text.secondary};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base200};
  }
`;

type StyleProps = {
  isActive: boolean;
};

type FilterButtonProps = StyleProps & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  isActive,
  text,
}) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {text}
    </Button>
  );
};
