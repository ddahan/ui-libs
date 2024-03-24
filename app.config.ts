export default defineAppConfig({
  ui: {
    strategy: "merge",
    primary: "emerald",
    gray: "slate",
    tooltip: {
      // removes fixed height and truncate
      base: "h-auto overflow-visible text-overflow-clip whitespace-normal",
      popper: { placement: "top" },
    },
  },
  repoUrl: "https://github.com/ddahan/ui-libs",
  myWebsiteUrl: "https://david-dahan.com",
  myContactUrl: "https://david-dahan.com/contact",
})
