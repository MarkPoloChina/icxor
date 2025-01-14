import type { Meta } from '@main/illust/entities/meta.entities'
import type { Poly } from '@main/illust/entities/poly.entities'
import type { RemoteBase } from '@main/illust/entities/remote_base.entities'

export interface IllustObj {
  id: number
  star: number
  link: string
  remote_endpoint: string
  thumb_endpoint: string
  date: Date
  poly: Poly[]
  tag: {
    id?: number
    type?: string
    name: string
    illusts?: IllustObj[]
  }[]
  meta?: Meta
  remote_base: RemoteBase
  updateDate: Date
  createDate: Date
  checked?: boolean
}
