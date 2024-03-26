import { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, label, value, onChange }: InputProps) => {
  return (
    <div className='my-12'>
      <p>
        <label>{label}</label>
        <input
          name={name}
          className="outline-none bg-transparent text-3xl tracking-wide p-4 border-b-4 rounded-sm border-slate-500 w-full"
          type="text"
          value={value}
          onChange={(event) => onChange(event)}
        />
      </p>
    </div>
  );
};

export default Input;
