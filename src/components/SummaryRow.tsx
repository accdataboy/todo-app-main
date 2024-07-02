import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  p {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.base100};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    p {
      font-size: ${({ theme }) => theme.fontSize.base200};
    }
  }
`;

const ClearButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  border: none;

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.base200};
  }
`;

const FilterSection = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.base400};
  }
`;

type SummaryRowProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  itemCount: number;
  children: React.ReactNode;
};

export const SummaryRow: React.FC<SummaryRowProps> = ({
  onClick,
  children,
  itemCount,
}: SummaryRowProps) => {
  return (
    <Wrapper>
      <p>{`${itemCount} ${itemCount === 1 ? "item" : "items"} left`}</p>
      <FilterSection>{children}</FilterSection>
      <ClearButton onClick={onClick}>Clear Completed</ClearButton>
    </Wrapper>
  );
};
