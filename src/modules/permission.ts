import { UserModule } from '~/types'

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      const isRequireAuth = to?.meta?.requireAuth
      try {
        const sessionId = window.sessionStorage.getItem('sessionId')
        if (isRequireAuth && !sessionId)
          router.push('/404')
        else
          next()
      }
      catch (error) {

      }
    })
  }
}
