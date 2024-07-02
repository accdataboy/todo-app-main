import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base500};
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

type FilterRowProps = {
  children: React.ReactNode;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  children,
}: FilterRowProps) => {
  return <Wrapper>{children}</Wrapper>;
};
