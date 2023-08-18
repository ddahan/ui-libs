// component sections
// TODO: replace by key of?
type SectionName = "Elements" | "Forms" | "Data" | "Navigation" | "Overlays" | "Layout";

// components
// TODO: replace by key of?
type ComponentName =
  // Elements
  | "Accordion"
  | "Avatar"
  | "Badge"
  | "Button"
  | "Button Group"
  | "Dropdown"
  | "Keyboard Key"

  // Forms
  | "Input"
  | "Textarea"
  | "Select"
  | "Select Menu"
  | "Checkbox"
  | "Radio"
  | "Toggle"
  | "Range"
  | "Form Group"
  | "Form"

  // Data
  | "Table"

  // Navigation
  | "Vertical Navigation"
  | "Command Palette"
  | "Pagination"
  | "Tabs"

  // Overlays
  | "Modal"
  | "Slideover"
  | "Popover"
  | "Tooltip"
  | "Context Menu"
  | "Toast"

  // Layout
  | "Card"
  | "Container"
  | "Skeleton";

type Section = { name: SectionName; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  description?: string; // see primeVue for example
};
