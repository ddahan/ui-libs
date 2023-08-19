// Tour: https://saas-ui.dev/docs/components/engagement/tour

export const sections: Array<Section> = [
  {
    name: "Elements",
    icon: "i-heroicons-square-3-stack-3d",
    components: [
      {
        name: "Accordion",
        aliases: ["Collapse"],
        description: "Vertically collapsing accordion panels",
      },
      { name: "Avatar", description: "Rounded image of a resource" },
      {
        name: "Badge",
        aliases: ["Chip"],
        description: "Short text to represent a status or a category",
      },
      { name: "Button" },
      { name: "Button Group", description: "Group a series of buttons together" },
      {
        name: "Breadcrumb",
        description:
          "Indicate the current page's location within a navigational hierarchy",
      },
      {
        name: "Carousel",
        aliases: ["Slideshow"],
        description:
          "A slideshow component for cycling through elements, typically images or slides of text",
      },
      {
        name: "Chat Bubble",
        description:
          "Show one line of conversation and its data, like author image, name, time.",
      },
      {
        name: "Divider",
        description: "Visual element which separates content vertically or horizontally.",
      },
      {
        name: "Dropdown",
        description: "Toggle contextual overlays for displaying lists of actions",
      },
      {
        name: "Indicator",
        description: "Used to place an element on the corner of another element",
      },
      {
        name: "Mockup",
        description: "Shows a fake box (browser, code, phone, window, etc.)",
      },
      {
        name: "Keyboard Key",
        description:
          "A keyboard key in a text block, typically to display a shortcut to a user",
      },
      {
        name: "Stack",
        description: "Stack visually puts elements on top of each other",
      },
    ],
  },
  {
    name: "Input",
    icon: "i-heroicons-pencil-square",
    components: [
      { name: "Input", description: "An input field" },
      { name: "Textarea", description: "A textarea field" },
      { name: "Select", description: "A select field" },
      {
        name: "Select Menu",
        description:
          "A select menu with advanced features (search, multiple select, etc.)",
      },
      {
        name: "Swap",
        description: "Allows to toggle the visibility of two elements",
      },
      { name: "Checkbox", description: "A checkbox field" },
      { name: "Radio", description: "A radio field" },
      { name: "Toggle", description: "A toggle field" },
      { name: "Range", description: "A range field" },
      {
        name: "Rating",
        description: "A set of radio buttons that allow the user to rate something",
      },
      {
        name: "Form Group",
        description: "A label and additional informations around a form element",
      },
      { name: "Form", description: "Form data collection and validation" },
      { name: "File Input", description: "An input field for uploading files" },
    ],
  },
  {
    name: "Data",
    icon: "i-heroicons-table-cells",
    components: [
      {
        name: "Table",
        description: "Data displayed in a table",
      },
    ],
  },
  {
    name: "Navigation",
    icon: "i-heroicons-link-solid",
    components: [
      {
        name: "Bottom Tabs",
        description:
          "Bottom navigation that allows navigation between primary screens, usually used on mobile",
      },
      {
        name: "Command Palette",
      },
      {
        name: "Footer",
        description:
          "Bottom page navigation which usually contains logo, copyright notice, and links to other pages",
      },
      {
        name: "Navbar",
        description:
          "An horizontal bar or section typically located at the top of a webpage, which contains links, buttons, or other navigational elements",
      },
      {
        name: "Pagination",
      },
      {
        name: "Progress",
        aliases: ["Progress Bar", "Progress Indicator"],
        description:
          "A graphical element used to visualize the progression of a particular process, such as a file download, a setup process, or any task that might take some time to complete",
      },
      {
        name: "Scrollspy",
        description:
          "A navigation mechanism that automatically highlights the navigation links based on the scroll position to indicate which section of the page is currently in the viewport. It's a common feature in single-page websites or long pages with distinct sections.",
      },
      {
        name: "Steps",
        description: "Used to show a list of steps in a process.",
      },
      {
        name: "Tabs",
        description: "A set of tab panels that are displayed one at a time",
      },
      {
        name: "Vertical Navigation",
        description: "Navigation menu with items vertically stacked",
      },
    ],
  },
  {
    name: "Overlays",
    icon: "i-heroicons-square-2-stack",
    components: [
      {
        name: "Modal",
        description:
          "Dialog box or popup window that is displayed on top of the current page.",
      },
      {
        name: "Slideover",
        aliases: ["Slide-out panel", "Sliding Overlay", "Offcanvas", "Drawer"],
        description:
          "Extra content or navigation options to slide over the main content of a page, from one side of the screen",
      },
      {
        name: "Popover",
        description:
          "A transient view that appears above other content onscreen when a user clicks or taps on a control or within a defined area.",
      },
      {
        name: "Tooltip",
        description:
          "A brief, informative message that appears when a user hovers over an element",
      },
      {
        name: "Context Menu",
        description: "A dedicated menu that appears on right click",
      },
      {
        name: "Toast",
        aliases: ["Notification", "Alert"],
        description:
          "A small, non-modal notification that provides feedback to a user, typically appearing for a short duration and then disappearing automatically",
      },
    ],
  },
  {
    name: "Layout",
    icon: "i-teenyicons-grid-layout-outline",
    components: [
      { name: "Card", description: "Content with a header, body and footer" },
      { name: "Container", description: "Let constrain the user's content" },
      {
        name: "Skeleton",
        aliases: ["Placeholder"],
        description: "A placeholder typically used while content is loading",
      },
    ],
  },
];
