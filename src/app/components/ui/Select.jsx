import * as SelectPrimitive from "@radix-ui/react-select";

export function Select({ children, ...props }) {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
}

export function SelectTrigger({ children, ...props }) {
  return (
    <SelectPrimitive.Trigger
      className="border border-gray-300 rounded px-3 py-2 w-full flex justify-between items-center"
      {...props}>
      {children}
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({ children, ...props }) {
  return (
    <SelectPrimitive.Content
      className="bg-white shadow-lg rounded border"
      {...props}>
      {children}
    </SelectPrimitive.Content>
  );
}

export function SelectItem({ value, children, ...props }) {
  return (
    <SelectPrimitive.Item
      value={value}
      className="px-4 py-2 hover:bg-blue-100 focus:bg-blue-100 cursor-pointer"
      {...props}>
      {children}
    </SelectPrimitive.Item>
  );
}

export function SelectValue({ placeholder, ...props }) {
  return (
    <SelectPrimitive.Value
      className="text-gray-500 placeholder-gray-400"
      placeholder={placeholder}
      {...props}
    />
  );
}
