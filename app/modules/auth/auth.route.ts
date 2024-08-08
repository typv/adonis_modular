import router from '@adonisjs/core/services/router'
const AuthController = () => import('#modules/auth/controllers/auth.controller')

router.post('login', [AuthController, 'login'])
