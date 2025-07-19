export default defineNuxtPlugin(() => {
  const script = document.createElement("script")
  script.src = "https://vueschool.io/banner.js?affiliate=UILIB&type=top"
  script.async = true
  document.head.appendChild(script)
})
