import { lazyLoad } from 'utils/loadable'

export const CreditPage = lazyLoad(
  () => import('./index'),
  (module) => module.CreditPage,
)
