import { lazyLoad } from 'utils/loadable'

export const PremiumPage = lazyLoad(
  () => import('./index'),
  (module) => module.PremiumPage,
)
