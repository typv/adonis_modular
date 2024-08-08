import router from '@adonisjs/core/services/router'
const AuthController = () => import('#modules/auth/controllers/auth.controller')


router.group(() => {
  router.post('login', [AuthController, 'login'])
}).prefix('/api/v1/auth')
