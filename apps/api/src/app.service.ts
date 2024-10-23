import { Injectable } from '@nestjs/common'
import { add } from '@parkingX/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! ${add(10, 23)}`
  }
}
