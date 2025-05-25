import { ButtonFilterMatching } from "@/types/filters.types"
import { ComponentName } from "@/types/components.types"

export type Promo = {
  text: string
  icon?: string
  url: string
}

export type Library = {
  name: string
  onTopOf?: string // name of the library the tool is based on
  logo: string
  logoDark?: string // only if the logo differs in Dark Mode
  url: string
  repoOwner?: string
  repoName?: string
  package?: string
  filterMatchings: ButtonFilterMatching[]
  componentMatchings: ComponentName[]
  nbStars?: number // filled later
  nbDownloads?: number // filled later
  promo?: Promo
}
