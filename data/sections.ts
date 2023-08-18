export const sections: Array<Section> = [
  {
    name: "Elements",
    components: [
      { name: "Accordion", description: "Vertically collapsing accordion panels" },
      { name: "Avatar", description: "Rounded image of a resource" },
      {
        name: "Badge",
        aliases: ["Chip"],
        description: "Short text to represent a status or a category",
      },
      { name: "Button", description: "" },
      { name: "Button Group", description: "Group a series of buttons together" },
      {
        name: "Dropdown",
        description: "Toggle contextual overlays for displaying lists of actions",
      },
      { name: "Keyboard Key", description: "A keyboard key in a text block" },
    ],
  },
  {
    name: "Forms",
    components: [
      { name: "Input", description: "An input field" },
      { name: "Textarea", description: "A textarea field" },
      { name: "Select", description: "A select field" },
      {
        name: "Select Menu",
        description:
          "A select menu with advanced features (search, multiple select, etc.)",
      },
      { name: "Checkbox", description: "A checkbox field" },
      { name: "Radio", description: "A radio field" },
      { name: "Toggle", description: "A toggle field" },
      { name: "Range", description: "A range field" },
      {
        name: "Form Group",
        description: "A label and additional informations around a form element",
      },
      { name: "Form", description: "Form data collection and validation" },
    ],
  },
  {
    name: "Data",
    components: [
      {
        name: "Table",
        description: "Data displayed in a table",
      },
    ],
  },
  {
    name: "Navigation",
    components: [
      {
        name: "Vertical Navigation",
        description: "",
      },
      {
        name: "Command Palette",
        description: "",
      },
      {
        name: "Pagination",
        description: "",
      },
      {
        name: "Tabs",
        description: "A set of tab panels that are displayed one at a time",
      },
    ],
  },
  {
    name: "Overlays",
    components: [
      {
        name: "Modal",
        description: "",
      },
      {
        name: "Slideover",
        description: "",
      },
      {
        name: "Popover",
        description: "",
      },
      {
        name: "Tooltip",
        description: "",
      },
      {
        name: "Context Menu",
        description: "A dedicated menu that appears on right click",
      },
      {
        name: "Toast",
        aliases: ["Notification", "Alert"],
        description: "",
      },
    ],
  },
  {
    name: "Layout",
    components: [
      { name: "Card", description: "" },
      { name: "Container", description: "" },
      { name: "Skeleton", description: "" },
    ],
  },
];
