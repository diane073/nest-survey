import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class MyDevLogger extends ConsoleLogger {
  debug(message: any, ...optionalParams: any[]) {
    super.debug(`[DEBUG] ${message}`, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    super.warn(`[WARN] ${message}`, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(`[LOG] ${message}`, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(`[ERROR] ${message}`, ...optionalParams);
  }
}

@Injectable()
export class MyProdLogger extends ConsoleLogger {
  warn(message: any, ...optionalParams: any[]) {
    super.warn(`[WARN] ${message}`, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(`[LOG] ${message}`, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(`[ERROR] ${message}`, ...optionalParams);
  }
}