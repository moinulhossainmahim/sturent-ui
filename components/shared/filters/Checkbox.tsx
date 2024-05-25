import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
