import "./Select.scss";
import { useState } from "react";

const Select = ({ label, value, handleSelect, options }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const selectFilterValue = (option) => () => {
    handleSelect(option.value);
    handleIsOpened();
  };

  const renderOption = (option) => {
    return (
      <li className="Select__option" value={option.value} key={option.value} onClick={selectFilterValue(option)}>
        {option.label}
      </li>
    );
  };

  const selectedOption = options?.find((option) => option.value === value);

  return (
    <div className="Select">
      <div className="Select__selectedOption" onClick={handleIsOpened}>
        <span className="Select__label">{label}:</span>
        <span className="Select__value">{selectedOption?.label}</span>
      </div>

      {isOpened && <ul className="Select__options">{options.map(renderOption)}</ul>}
    </div>
  );
};

export default Select;
