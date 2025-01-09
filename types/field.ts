export type Field = {
  inputType: string;
  fieldName: string;
  placeholder: string;
  label: string;
  required: boolean;
  questions?: string[];
  minLength?: number;
  regex?: string;
};
