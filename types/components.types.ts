// component sections
type SectionName = "Elements" | "Input" | "Data" | "Navigation" | "Overlays" | "Layout";

// components
type ComponentName =
  // Elements
  | "Accordion"
  | "Avatar"
  | "Badge"
  | "Breadcrumb"
  | "Button"
  | "Button Group"
  | "Carousel"
  | "Chat Bubble"
  | "Divider"
  | "Dropdown"
  | "Indicator"
  | "Mockup"
  | "Keyboard Key"
  | "Progress"
  | "Stack"
  | "Timeline"

  // Data input
  | "Checkbox"
  | "File Input"
  | "Form"
  | "Form Group"
  | "Input"
  | "Radio"
  | "Range"
  | "Rating"
  | "Select"
  | "Select Menu"
  | "Swap"
  | "Textarea"
  | "Toggle"

  // Data
  | "Table"

  // Navigation
  | "Bottom Tabs"
  | "Command Palette"
  | "Footer"
  | "Navbar"
  | "Pagination"
  | "Scrollspy"
  | "Steps"
  | "Tabs"
  | "Vertical Navigation"

  // Overlays
  | "Context Menu"
  | "Modal"
  | "Popover"
  | "Slideover"
  | "Toast"
  | "Tooltip"

  // Layout
  | "Card"
  | "Container"
  | "Skeleton";

type Section = { name: SectionName; icon: string; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  description?: string; // see primeVue for example
};
