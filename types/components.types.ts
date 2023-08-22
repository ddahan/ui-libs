// component sections
type SectionName = "Elements" | "Inputs" | "Data" | "Navigation" | "Overlays" | "Layout";

// components
type ComponentName =
  // Elements
  | "Accordion"
  | "Alert"
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
  | "Panel Splitter"
  | "Keyboard Key"
  | "Progress"
  | "Scroll Bar"
  | "Stack"
  | "Speed Dial"
  | "Timeline"

  // Data input
  | "Auto Complete"
  | "Color Picker"
  | "Checkbox"
  | "Input Chips"
  | "Date Picker"
  | "File Input"
  | "Form"
  | "Form Group"
  | "Input"
  | "Input Mask"
  | "Knob"
  | "Password Indicator"
  | "Radio"
  | "Range"
  | "Rating"
  | "Rich Text Editor"
  | "Select"
  | "Select Menu"
  | "Swap"
  | "Textarea"
  | "Toggle"

  // Data
  | "Table"
  | "Order List"
  | "Tree"
  | "Pick List"
  | "Virtual Scroller"

  // Navigation
  | "Bottom Tabs"
  | "Command Palette"
  | "Dock"
  | "Navbar"
  | "Pagination"
  | "Scroll Spy"
  | "Scroll Top"
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
  | "Tour"

  // Layout
  | "Card"
  | "Container"
  | "Skeleton";

type Section = { name: SectionName; icon: string; components: Component[] };

type Component = {
  name: ComponentName;
  aliases?: string[];
  help: string;
};
