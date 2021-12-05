import { lazyLoad } from 'utils/loadable'

export const TeacherPage = lazyLoad(
  () => import('./index'),
  (module) => module.TeacherPage,
)
