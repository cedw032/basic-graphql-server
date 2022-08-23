import { gql } from 'apollo-server'
export const schema = gql`
  type Query {
    getTiles: [Tile!]! | CompositeError
  }
  
  type Tile {
    id: String!
    type: String!
    name: String!
    internalName: String!
    url: String!
    tagMatch: Boolean!
    activeStartsAt: String!
    activeEndsAt: String
    utmSource: String!
    utmMedium: String!
    utmCampaign: String!
    utmTerm: String
    utmContent: String
    instore: Boolean!
    online: Boolean!
    global: Boolean!
    comingSoon: Boolean!
    tileImage: TileImage!
    logoImage: String
    currentTileUrl: String!
    currentLogoUrl: String
    currentUrl: String!
    status: String!
    callToAction: String
    exactCategories: [String!]
  }

  type TileImage {
    url: String!
  }
`
