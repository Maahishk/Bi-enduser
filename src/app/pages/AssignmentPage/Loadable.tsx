import { lazyLoad } from 'utils/loadable'

export const AssignmentPage = lazyLoad(
  () => import('./index'),
  (module) => module.AssigmentPage,
)
