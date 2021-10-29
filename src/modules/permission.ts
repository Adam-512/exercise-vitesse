import { UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from, next) => {
    const isRequireAuth = to.meta?.requireAuth
    const sessionId = sessionStorage.getItem('sessionId')
    if (isRequireAuth && !sessionId)
      router.push('/404')
    else
      next()
  })
}
