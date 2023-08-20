// Tour: https://saas-ui.dev/docs/components/engagement/tour

export const sections: Array<Section> = [
  {
    name: "Elements",
    icon: "i-heroicons-square-3-stack-3d",
    components: [
      {
        name: "Accordion",
        aliases: ["Collapse"],
        help: "Vertically collapsing accordion panels",
      },
      {
        name: "Alert",
        help: "Contextual information to be emphasized to the user",
      },
      { name: "Avatar", help: "Rounded image of a resource" },
      {
        name: "Badge",
        aliases: ["Chip"],
        help: "Short text to represent a status or a category",
      },
      {
        name: "Button",
        help: "Interactive element that users can click or tap to perform an action",
      },
      { name: "Button Group", help: "Group a series of buttons together" },
      {
        name: "Breadcrumb",
        help: "Indicate the current page's location within a navigational hierarchy",
      },
      {
        name: "Carousel",
        aliases: ["Slideshow"],
        help: "A slideshow component for cycling through elements, typically images or slides of text",
      },
      {
        name: "Chat Bubble",
        help: "Show one line of conversation and its data, like author image, name, time.",
      },
      {
        name: "Divider",
        help: "Visual element which separates content vertically or horizontally.",
      },
      {
        name: "Dropdown",
        help: "Toggle contextual overlays for displaying lists of actions",
      },
      {
        name: "Indicator",
        help: "Used to place an element on the corner of another element",
      },
      {
        name: "Mockup",
        help: "Shows a fake box (browser, code, phone, window, etc.)",
      },
      {
        name: "Keyboard Key",
        help: "A keyboard key in a text block, typically to display a shortcut to a user",
      },
      {
        name: "Stack",
        help: "Stack visually puts elements on top of each other",
      },
      {
        name: "Timeline",
        help: "A visual representation used to display a sequence of events or processes in chronological order.",
      },
    ],
  },
  {
    name: "Input",
    icon: "i-heroicons-pencil-square",
    components: [
      { name: "Input", help: "An input field" },
      { name: "Textarea", help: "A textarea field" },
      { name: "Select", help: "A select field" },
      {
        name: "Select Menu",
        help: "A select menu with advanced features (search, multiple select, etc.)",
      },
      {
        name: "Swap",
        help: "Allows to toggle the visibility of two elements",
      },
      { name: "Checkbox", help: "A checkbox field" },
      { name: "Radio", help: "A radio field" },
      { name: "Toggle", help: "A toggle field" },
      { name: "Range", help: "A range field" },
      {
        name: "Rating",
        help: "A set of radio buttons that allow the user to rate something",
      },
      {
        name: "Form Group",
        help: "A label and additional informations around a form element",
      },
      { name: "Form", help: "Form data collection and validation" },
      { name: "File Input", help: "An input field for uploading files" },
    ],
  },
  {
    name: "Data",
    icon: "i-heroicons-table-cells",
    components: [
      {
        name: "Table",
        help: "Data displayed in a table",
      },
    ],
  },
  {
    name: "Navigation",
    icon: "i-heroicons-link-solid",
    components: [
      {
        name: "Bottom Tabs",
        help: "Bottom navigation that allows navigation between primary screens, usually used on mobile",
      },
      {
        name: "Command Palette",
        help: "A powerful user interface element that allows users to access various commands, functions, or actions from a single input panel.",
      },
      {
        name: "Footer",
        help: "Bottom page navigation which usually contains logo, copyright notice, and links to other pages",
      },
      {
        name: "Navbar",
        help: "An horizontal bar or section typically located at the top of a webpage, which contains links, buttons, or other navigational elements",
      },
      {
        name: "Pagination",
        help: "Navigation system for large amount of data that need to be displayed one at a time.",
      },
      {
        name: "Progress",
        aliases: ["Progress Bar", "Progress Indicator"],
        help: "A graphical element used to visualize the progression of a particular process, such as a file download, a setup process, or any task that might take some time to complete",
      },
      {
        name: "Scrollspy",
        help: "A navigation mechanism that automatically highlights the navigation links based on the scroll position to indicate which section of the page is currently in the viewport. It's a common feature in single-page websites or long pages with distinct sections.",
      },
      {
        name: "Steps",
        help: "Used to show a list of steps in a process.",
      },
      {
        name: "Tabs",
        help: "A set of tab panels that are displayed one at a time",
      },
      {
        name: "Vertical Navigation",
        help: "Navigation menu with items vertically stacked",
      },
    ],
  },
  {
    name: "Overlays",
    icon: "i-heroicons-square-2-stack",
    components: [
      {
        name: "Modal",
        help: "Dialog box or popup window that is displayed on top of the current page.",
      },
      {
        name: "Slideover",
        aliases: ["Slide-out panel", "Sliding Overlay", "Offcanvas", "Drawer"],
        help: "Extra content or navigation options to slide over the main content of a page, from one side of the screen",
      },
      {
        name: "Popover",
        help: "A transient view that appears above other content onscreen when a user clicks or taps on a control or within a defined area.",
      },
      {
        name: "Tooltip",
        help: "A brief, informative message that appears when a user hovers over an element",
      },
      {
        name: "Context Menu",
        help: "A dedicated menu that appears on right click",
      },
      {
        name: "Toast",
        aliases: ["Notification"],
        help: "A small, non-modal notification that provides feedback to a user, typically appearing for a short duration and then disappearing automatically",
      },
      {
        name: "Tour",
        help: "Used to display a contextual help on features to new users.",
      },
    ],
  },
  {
    name: "Layout",
    icon: "i-teenyicons-grid-layout-outline",
    components: [
      { name: "Card", help: "Content with a header, body and footer" },
      { name: "Container", help: "Let constrain the user's content" },
      {
        name: "Skeleton",
        aliases: ["Placeholder"],
        help: "A placeholder typically used while content is loading",
      },
    ],
  },
];
