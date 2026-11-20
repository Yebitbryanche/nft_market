import { ReactNode, ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon?: ReactNode;
  text: string;
}

export default function LineButton({
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
        w-full
        md:w-auto
        h-[52px] md:h-[60px] 
        px-6 md:px-[50px]
        border-2
        border-primary 
        rounded-[16px] md:rounded-[20px] 
        cursor-pointer 
        transition-all duration-200 
        hover:bg-primary/10 active:scale-[0.98] 
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-x-[14px]">
        {icon && <span className="flex items-center justify-center">{icon}</span>}
        <span className="text-sm md:text-[16px] font-bold text-text whitespace-nowrap">
          {text}
        </span>
      </div>
    </button>
  );
}