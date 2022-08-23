import fetch from 'node-fetch'

const url = 'https://shop-directory-heroku.laybuy.com/api/tiles'

type Tile = {
  id: string
  type: string
  attributes: TileAttributes
}

type TileAttributes = {
  name: string
  internalName: string
  url: string
  tagMatch: boolean
  activeStartsAt: string
  activeEndsAt: string | null
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: null
  utmContent: null
  instore: boolean
  online: boolean
  global: boolean
  comingSoon: boolean
  tileImage: TileImage
  logoImage: null
  currentTileUrl: string
  currentLogoUrl: string | null
  currentUrl: string
  status: TileActiveStatus
  callToAction: null
  exactCategories: null
}

type TileActiveStatus = 'Active'
type TileImage = { url: string }

export const upstream = {
  tiles: {
    list: async () => {
      const response = await fetch(url)
      const json = await response.json()
      return json.data.map(tileToDownstreamTile)
    },
  },
}

const tileToDownstreamTile = ({
  id,
  type,
  attributes,
}: {
  id: string
  type: string
  attributes: TileAttributes
}) => ({
  id,
  type,
  ...attributes,
})
