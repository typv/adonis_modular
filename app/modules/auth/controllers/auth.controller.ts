import type { HttpContext } from '@adonisjs/core/http'
import User from "#common/models/user";

export default class AuthController {
  async login(ctx: HttpContext) {
    let user = await User.first();
    const token = await User.accessTokens.create(user);
    return token;
  }
}
