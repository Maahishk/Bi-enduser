import { lazyLoad } from 'utils/loadable'

export const StudentsPage = lazyLoad(
  () => import('./index'),
  (module) => module.StudentsPage,
)
