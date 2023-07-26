const sections: Section[] = [
  {
    name: "Elements",
    components: [
      { name: "Avatar", description: "Rounded image of a resource", factor: 2 },
      {
        name: "Badge",
        aliases: ["chip"],
        description: "Rounded image of a resource",
        factor: 2,
      },
    ],
  },
  {
    name: "Forms",
    components: [{ name: "Input", description: "todo", factor: 1 }],
  },
];

// TODO: need a util method to flaten the components, without the sections.

export default sections;
