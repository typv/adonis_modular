import type { HttpContext } from '@adonisjs/core/http'
import Department from "#modules/department/models/department";

export default class DepartmentController {
  async index(ctx: HttpContext) {
    const res = await Department.find(1)
    return res
  }
}
