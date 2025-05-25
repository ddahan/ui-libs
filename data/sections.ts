export const sections = [
  {
    name: "Elements" as const,
    icon: "i-heroicons-square-3-stack-3d",
    components: [
      {
        name: "Accordion" as const,
        aliases: ["Collapse", "Disclosure", "Expansion Panel"],
        help: "Vertically collapsing accordion panels",
      },
      {
        name: "Alert" as const,
        help: "Contextual information to be emphasized to the user",
      },
      { name: "Avatar" as const, help: "Rounded image of a resource" },
      {
        name: "Badge" as const,
        aliases: ["Chip", "Tag"],
        help: "Short text indicator to represent a status",
      },
      {
        name: "Button" as const,
        help: "Interactive element that users can click or tap to perform an action",
      },
      {
        name: "Select Button" as const,
        help: "A button (or button group) used for selection.",
      },
      {
        name: "Toggle Button" as const,
        help: "A button used to select a boolean value.",
      },
      {
        name: "Breadcrumb" as const,
        help: "Indicate the current page's location within a navigational hierarchy",
      },
      {
        name: "Carousel" as const,
        aliases: ["Slideshow", "Galleria"],
        help: "A slideshow component for cycling through elements, typically images or slides of text",
      },
      {
        name: "Chat Bubble" as const,
        help: "Show one line of conversation and its data, like author image, name, time.",
      },
      {
        name: "Divider" as const,
        aliases: ["Separator"],
        help: "Visual element which separates content vertically or horizontally.",
      },
      {
        name: "Dropdown" as const,
        aliases: ["Select Menu"],
        help: "Toggle contextual overlays for displaying lists of actions or items to select.",
      },
      {
        name: "Listbox" as const,
        help: "Select one or more values from a displayed list of items.",
      },
      {
        name: "Indicator" as const,
        help: "Used to place an element on the corner of another element",
      },
      {
        name: "Mockup" as const,
        help: "A fake box (browser, code, phone, window) around the content",
      },
      { name: "Panel Splitter" as const, help: "Used to separate and resize panels" },
      {
        name: "QR Code" as const,
        help: "A component that generates a QR code based on the provided data.",
      },
      {
        name: "Keyboard Key" as const,
        help: "A keyboard key in a text block, typically to display a shortcut to a user",
      },
      {
        name: "Scroll Bar" as const,
        aliases: ["Scroll Area"],
        help: "A customizable and cross browser alternative to native browser scrollbar",
      },
      {
        name: "Speed Dial" as const,
        aliases: ["Floating Action Button"],
        help: "When pressed, this floating action button, displays multiple other action buttons. It is used to quickly access features.",
      },
      {
        name: "Stack" as const,
        help: "Stack visually puts elements on top of each other",
      },
      {
        name: "Timeline" as const,
        help: "A visual representation used to display a sequence of events or processes in chronological order.",
      },
    ],
  },
  {
    name: "Inputs" as const,
    icon: "i-heroicons-pencil-square",
    components: [
      {
        name: "Auto Complete" as const,
        help: "An input component that provides real-time suggestions when being typed",
      },
      {
        name: "Color Picker" as const,
        help: "An input component to select a color",
      },
      {
        name: "Input Chips" as const,
        help: "Used to enter multiple values on a single input fields",
      },
      {
        name: "OTP Input" as const,
        help: "Used for MFA procedure of authenticating users by a one-time password",
      },
      {
        name: "Date Picker" as const,
        aliases: ["Calendar"],
        help: "A popover to select a date or a time from a calendar-like interface",
      },
      {
        name: "Rich Text Editor" as const,
        help: "A component that allows users to format and style text, offering various options like bold, italics, lists, and more, without needing to write HTML or other markup code",
      },
      { name: "Input" as const, help: "An input field" },
      {
        name: "Input Mask" as const,
        help: "Automatically formats inputs like date, currency, email and phone",
      },
      {
        name: "Knob" as const,
        help: "An input element to adjust a value by turning or dragging the control, similar to a physical knob on an electronic device. It's often used to control volume, brightness, or other continuous values",
      },
      {
        name: "Password Indicator" as const,
        help: "Helper to provide information on password field like strength, while entering it",
      },
      { name: "Textarea" as const, help: "A textarea field" },
      { name: "Select" as const, help: "A select field" },
      {
        name: "Swap" as const,
        help: "Allows to toggle the visibility of two elements",
      },
      {
        name: "Signature Pad" as const,
        help: "A component that allows users to draw a signature using a signature pad.",
      },
      { name: "Checkbox" as const, help: "A checkbox field" },
      { name: "Radio" as const, help: "A radio field" },
      {
        name: "Toggle" as const,
        aliases: ["Switch", "Input Switch"],
        help: "A toggle field",
      },
      { name: "Range" as const, aliases: ["Slider"], help: "A range field" },
      {
        name: "Rating" as const,
        help: "A set of radio buttons that allow the user to rate something",
      },
      {
        name: "File Input" as const,
        aliases: ["File Upload"],
        help: "An input field for uploading files",
      },
    ],
  },
  {
    name: "Navigation" as const,
    icon: "i-heroicons-link-solid",
    components: [
      {
        name: "Bottom Tabs" as const,
        help: "Bottom navigation that allows navigation between primary screens, usually used on mobile",
      },
      {
        name: "Command Palette" as const,
        help: "A powerful user interface element that allows users to access various commands, functions, or actions from a single input panel",
      },
      { name: "Dock" as const, help: "A macOS-like Dock to navigate, using icons" },
      {
        name: "Pagination" as const,
        aliases: ["Paginator"],
        help: "Navigation system for large amount of data that need to be displayed one at a time",
      },
      {
        name: "Progress" as const,
        aliases: ["Progress Bar", "Progress Indicator"],
        help: "A graphical element used to visualize the progression of a particular process, such as a file download, a setup process, or any task that might take some time to complete",
      },
      {
        name: "Scroll Spy" as const,
        aliases: ["Anchor"],
        help: "A navigation mechanism that automatically highlights the navigation links based on the scroll position to indicate which section of the page is currently in the viewport. It's a common feature in single-page websites or long pages with distinct sections",
      },
      {
        name: "Scroll Top" as const,
        aliases: ["Back Top"],
        help: "Display an item after a certain scroll position. It's usually used to navigates to the top of the page",
      },
      {
        name: "Steps" as const,
        help: "Used to show a list of steps in a process",
      },
      {
        name: "Tabs" as const,
        help: "A set of tab panels that are displayed one at a time",
      },
      {
        name: "Vertical Navigation" as const,
        help: "Navigation menu with items vertically stacked",
      },
    ],
  },
  {
    name: "Overlays" as const,
    icon: "i-heroicons-square-2-stack",
    components: [
      {
        name: "Modal" as const,
        aliases: ["Dialog"],
        help: "Dialog box or popup window that is displayed on top of the current page.",
      },
      {
        name: "Slideover" as const,
        aliases: ["Slide-out panel", "Sliding Overlay", "Offcanvas", "Drawer", "Sheet"],
        help: "Extra content or navigation options to slide over the main content of a page, from one side of the screen",
      },
      {
        name: "Popover" as const,
        help: "A transient view that appears above other content onscreen when a user clicks or taps on a control or within a defined area",
      },
      {
        name: "Tooltip" as const,
        help: "A brief, informative message that appears when a user hovers over an element",
      },
      {
        name: "Context Menu" as const,
        help: "A dedicated menu that appears on right click",
      },
      {
        name: "Toast" as const,
        aliases: ["Notification", "Snack Bar"],
        help: "A small, non-modal notification that provides feedback to a user, typically appearing for a short duration and then disappearing automatically",
      },
      {
        name: "Tour" as const,
        help: "Used to display a contextual help on features to new users",
      },
      {
        name: "Watermark" as const,
        help: "Add specific text or patterns to the page. It can be used to identify copyright or prevent information theft.",
      },
    ],
  },
  {
    name: "Layout" as const,
    icon: "i-ph-layout",
    components: [
      { name: "Card" as const, help: "Content with a header, body and footer" },
      { name: "Container" as const, help: "Let constrain the user's content" },
      {
        name: "Skeleton" as const,
        aliases: ["Placeholder"],
        help: "A placeholder typically used while content is loading",
      },
    ],
  },
  {
    name: "Data" as const,
    icon: "i-heroicons-table-cells",
    components: [
      {
        name: "Table" as const,
        help: "Data displayed in a tabular format",
      },
      {
        name: "Calendar" as const,
        help: "Data displayed in a calendar format (weekly or monthly view)",
      },
      {
        name: "Order List" as const,
        help: "A component to display a list of items with actions to sort those items",
      },
      {
        name: "Tree" as const,
        aliases: ["Organization Chart"],
        help: "A component to visualize and interact with hierarchical data",
      },
      {
        name: "Pick List" as const,
        aliases: ["Transfer"],
        help: "A component for moving items between different lists and ordering them",
      },
      {
        name: "Virtual Scroller" as const,
        help: "A performant approach to render large amounts of data efficiently",
      },
    ],
  },
]
