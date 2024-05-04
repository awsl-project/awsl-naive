export interface Blogger {
  uid: string
  name: string
}

export interface BloggerAdd {
  uid: string
  keyword: string
}

export interface PicInfo {
  url: string
  width: number
  height: number
}

export interface Picture {
  picId: string
  wbUrl: string
  picInfo: {
    thumbnail?: PicInfo
    bmiddle?: PicInfo
    large: PicInfo
    original: PicInfo
    mw2000: PicInfo
  }
}

export interface SocialLinkProps {
  name: 'twitter' | 'github' | 'discord'
  url: string
}

export interface SocialLinksProps {
  links: SocialLinkProps[]
}

export interface Member {
  name: string
  avatar: string
  links: SocialLinkProps[]
}

export type Members = Member[]
