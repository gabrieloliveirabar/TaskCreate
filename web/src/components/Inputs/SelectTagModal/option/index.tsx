interface IOptionSelectTag {
  optionValue: string;
  optionText: string;
}

export const OptionSelectTag = ({
  optionValue,
  optionText,
}: IOptionSelectTag) => {
  return <option value={optionValue}>{optionText}</option>;
};
