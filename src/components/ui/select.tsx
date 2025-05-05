import * as React from "react";

// Förenklad version av Select-komponenten för lokal körning
// Originalversionen var beroende av @radix-ui/react-select

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
}

// SelectTrigger - komponenten som visar det valda värdet och öppnar dropdown
const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

// SelectValue - komponenten som visar det valda värdet
const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { placeholder?: string }
>(({ className, placeholder, children, ...props }, ref) => {
  return (
    <span ref={ref} className={className} {...props}>
      {children || placeholder}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

// SelectContent - innehållet i dropdown-menyn
const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-700 shadow-md ${className}`}
      {...props}
    >
      <div className="max-h-96 overflow-auto p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

// SelectItem - ett alternativ i dropdown-menyn
const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-base outline-none hover:bg-neutral-100 focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      data-value={value}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
      <span className="ml-2">{children}</span>
    </div>
  );
});
SelectItem.displayName = "SelectItem";

// Huvudkomponenten Select som använder en vanlig select-element
const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ onValueChange, defaultValue, value, children, ...props }, ref) => {
  // Handle value change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  // Egentligen skulle vi implementera en mer avancerad version med popup-meny
  // men för att göra det enkelt att köra lokalt använder vi ett vanligt select-element
  return (
    <select
      ref={ref}
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };