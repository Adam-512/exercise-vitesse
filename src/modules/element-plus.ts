import { ElDrawer, ElMenu } from 'element-plus'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(ElDrawer)
  app.use(ElMenu)
}
