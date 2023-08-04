
export type FormSelectProps = {
  id: string;
  error: string | null;
  label?: string;
  subLabel?: string;
  bottomLabel?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  small?: boolean;
  options: { value: string; label: string }[];
  loading?: boolean;
  dropdownProps?: any
  isMulti?: boolean;
};
