export const sections: Section[] = [
  {
    name: "Elements",
    components: [
      { name: "Avatar", description: "Rounded image of a resource" },
      {
        name: "Badge",
        aliases: ["chip"],
        description: "Rounded image of a resource",
      },
    ],
  },
  {
    name: "Forms",
    components: [{ name: "Input", description: "todo" }],
  },
];

// TODO: need a util method to flaten the components, without the sections.
