import { lazyLoad } from 'utils/loadable'

export const B2CPage = lazyLoad(
  () => import('./index'),
  (module) => module.B2CPage,
)
