export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface InputProps {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  value?: string;
  name?: string;
  placeholder: string;
}

export interface TextareaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  value?: string;
  name?: string;
  placeholder?: string;
}

export interface ItemsProps {
  newItem: { id: number; title: string; body: string };
}
