import * as React from "react";

type CheckedState = boolean | "indeterminate";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'> {
  checked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    // Eftersom vi inte använder @radix-ui/react-checkbox här, 
    // skapar vi en enklare implementation baserad på en vanlig input type="checkbox"
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onCheckedChange) {
        onCheckedChange(event.target.checked);
      }
    };

    return (
      <span className={`relative inline-flex h-5 w-5 items-center justify-center ${className}`}>
        <input
          type="checkbox"
          ref={ref}
          checked={checked === true}
          onChange={handleChange}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-neutral-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
        {checked === true && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-primary">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </span>
        )}
      </span>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, type CheckboxProps };