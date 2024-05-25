import { Dispatch, SetStateAction, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterSelectProps {
  name: string;
  items: { id: number, name: string, slug?: string, city?: string }[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function FilterSelect({ name, items, setValue, value } : FilterSelectProps) {
  return (
    <Select value={value} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder={`Select a ${name}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</SelectLabel>
          {items.map((item) => (
            <SelectItem value={item.slug || item.name} key={item.id}>{item.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
