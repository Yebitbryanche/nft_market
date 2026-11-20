import { ReactNode, ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon?: ReactNode;
  text: string;
}

export default function Button({
  icon,
  text,
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        h-[46px] md:h-[60px] 
        px-6 md:px-[50px] 
        md:w-auto w-full
        bg-primary 
        rounded-[16px] md:rounded-[20px] 
        cursor-pointer 
        transition-all duration-200 
        active:scale-[0.98] 
        hover:scale-95 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-x-[12px]">
        {icon && <span className="flex items-center justify-center">{icon}</span>}
        <span className="text-sm md:text-[16px] font-semibold text-text whitespace-nowrap">
          {text}
        </span>
      </div>
    </button>
  );
}