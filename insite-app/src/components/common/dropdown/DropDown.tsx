import styled from "styled-components";
import { useState } from "react";

interface ComponentProps {
  width: string;
}

interface ButtonProps {
  height: string;
}

interface DropDownProps extends ComponentProps, ButtonProps {
  // todo type 추후에 지정해주기
  items: any;
}

const Component = styled.div<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.9rem;
  width: ${(props) => props.width};
  position: relative;
`;

const SelectButton = styled.button<ButtonProps>`
  width: 70%;
  display: flex;
  align-items: center;
  height: ${(props) => props.height};
  margin-top: 0.25rem;
  background-color: ${(props) => props.theme.colors.b3};
  border-radius: 0.6rem;
  padding: 1.3rem 1.6rem;
  cursor: pointer;
`;

const Select = styled.div<{ isThemeSelected: boolean }>`
  width: 95%;
  outline: none;
  border: none;
  color: ${(props) => (props.isThemeSelected ? "#f9fafb" : "gray")};
  font-size: 1.5rem;
  text-align: left;
`;

const DropDownStyle = styled.div`
  position: absolute;
  width: 70%;
  background-color: ${(props) => props.theme.colors.b3};
  border-radius: 0.6rem;
  top: 6rem;
  height: 15rem;
  overflow-y: auto;
  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
      height: 0;
    }
    100% {
      transform: translateY(0);
      height: 15rem;
    }
  }
  animation: dropdown 0.4s ease;
`;

const Option = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.b3};
  font-size: 1.5rem;
  height: 4.9rem;
  &:hover {
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

/** 데이터, 너비, 높이(rem) */
function DropDown({ items, width, height }: DropDownProps) {
  const [isDropdown, setIsDropDown] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");

  const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDropDown(false);
    const themeValue = e.currentTarget.value;
    const selectedThemeObj = items.find((item) => item.value === themeValue);
    if (selectedThemeObj) {
      setSelectedTheme(selectedThemeObj.name);
    }
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropdown);
  };

  return (
    <Component width={width}>
      <SelectButton height={height} type="button" onClick={onClickSelect}>
        <Select isThemeSelected={selectedTheme !== ""}>
          {selectedTheme === "" ? "테마를 선택해주세요" : selectedTheme}
        </Select>
      </SelectButton>
      {isDropdown && (
        <DropDownStyle>
          {items.map((item) => (
            <Option value={item.value} key={item.value} onClick={onClickOption}>
              {item.name}
            </Option>
          ))}
        </DropDownStyle>
      )}
    </Component>
  );
}

export default DropDown;
