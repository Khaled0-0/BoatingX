// components/ui/SelectableDropdown.tsx
'use client';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/app/components/ui/select';

type Option = { label: string; value: string };

interface SelectableDropdownProps {
   label: string;
   placeholder: string;
   value: string;
   onChange: (value: string) => void;
   options: Option[];
}

export const SelectableDropdown = ({
   label,
   placeholder,
   value,
   onChange,
   options,
}: SelectableDropdownProps) => {
   return (
      <Select value={value} onValueChange={onChange}>
         <SelectTrigger className="w-[130px]">
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>{label}</SelectLabel>
               {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                     {option.label}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
};
