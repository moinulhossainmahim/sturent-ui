'use client';

import { TUpdateGeneralInfoSchema, TSignInSchema, TSignUpSchema, TAddressSchema } from "@/lib/schemaTypes";
import {
  FieldErrors,
  UseFormRegister
} from "react-hook-form";
import { TbCoinTaka } from "react-icons/tb";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<TSignUpSchema> | UseFormRegister<TSignInSchema> | UseFormRegister<TUpdateGeneralInfoSchema> | UseFormRegister<TAddressSchema>;
  errors: FieldErrors;
  mt?: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  mt,
}) => {
  const registerField = register as UseFormRegister<TSignUpSchema | TSignInSchema | TUpdateGeneralInfoSchema | TAddressSchema>;
  return (
    <div className={`w-full relative mt-${mt ? mt : 0}`}>
      {formatPrice && (
        <TbCoinTaka
          size={24}
          className="absolute  text-foreground top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        //@ts-ignore
        {...registerField(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-input
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'primary' : 'border-muted'}
          ${errors[id] ? 'focus:primary' : 'focus:border-card-foreground'}
        `}
      />
      {label ? (
        <label
          className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? 'left-9' : 'left-4'}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
          `}
        >
          {label}
        </label>
      ) : null}
    </div>
   );
}

export default Input;
