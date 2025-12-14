export interface IDropdownSelectProps {
  name: string;
  id: string;
  onChange: (newValue: SelectOptionValue) => void;
  options: SelectOptions;
  defaultValue?: SelectOptionValue;
  label?: string;
  value: SelectOptionValue;
}

export type SelectOptions = SelectOption[];

export type SelectOption = {
  value: SelectOptionValue;
  text: string;
};

export type SelectOptionValue = number | string;
