export default defineAppConfig({
  ui: {
    primary: "emerald",
    gray: "slate",
    tooltip: {
      // removes fixed height and truncate
      base: "[@media(pointer:coarse)]:hidden h-auto px-2 py-1 text-xs font-normal",
      popper: { placement: "top" },
    },
  },
  repoUrl: "https://github.com/ddahan/ui-libs",
  buyMeACoffeeUrl: "https://www.buymeacoffee.com/ddahan",
  myWebsiteUrl: "https://david-dahan.com",
  myContactUrl: "https://david-dahan.com/contact",
});
