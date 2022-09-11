export interface Producer {
  uid: string
  name: string
}

export interface ProducerAdd {
  uid: string
  keyword: string
}

export interface PicInfo {
  url: string
  width: number
  height: number
}

export interface Picture {
  pic_id: string
  wb_url: string
  pic_info: {
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
