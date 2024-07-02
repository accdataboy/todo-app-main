import styled from "styled-components";

const Wrapper = styled.div<CheckBoxProps>`
  display: grid;
  place-items: center;
  width: ${({ theme }) => theme.fontSize.base500};
  height: ${({ theme }) => theme.fontSize.base500};
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.color.checkbox.background : theme.color.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.circular};

  &:hover {
    background: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.color.text.secondary
        : theme.color.checkbox.background};
    cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  }

  label {
    display: inline-block;
    width: ${({ theme }) => theme.fontSize.base400};
    height: ${({ theme }) => theme.fontSize.base400};
    background: ${({ theme, isChecked }) =>
      isChecked
        ? `url(${theme.images.check})`
        : theme.color.background.primary};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: ${({ theme }) => theme.borderRadius.circular};

    &:hover {
      cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    transform: scale(120%);
  }
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  appearance: none;
`;

type CheckBoxProps = {
  onChange: () => void;
  isChecked: boolean;
  isDisabled: boolean;
};

export const Checkbox: React.FC<CheckBoxProps> = ({
  onChange,
  isChecked,
  isDisabled,
}: CheckBoxProps) => {
  return (
    <Wrapper isChecked={isChecked} isDisabled={isDisabled} onChange={onChange}>
      <label>
        <Input checked={isChecked} disabled={isDisabled} onChange={onChange} />
      </label>
    </Wrapper>
  );
};
