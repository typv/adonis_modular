import router from '@adonisjs/core/services/router'
const DepartmentController = () => import('#modules/department/controllers/department.controller')

router.get('departments', [DepartmentController, 'index'])
