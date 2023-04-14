import { Logger, ILogObj } from 'tslog';

class EPLogger {

  private static instance: EPLogger;
  private static tslogger: Logger<ILogObj>;

  private constructor() {
      EPLogger.tslogger = new Logger({
        name: "EnergyPilot-Backend",
        prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} {{name}} {{fileNameWithLine}}\t"
      });
  }

  public static generateSingleton(): void {
    if (!EPLogger.instance) {
      EPLogger.instance = new EPLogger();
    }
  }

  public static info(message: string): void {
    EPLogger.tslogger.info(message);
  }

  public static debug(message: string): void {
    EPLogger.tslogger.debug(message);
  }

  public static warn(message: string): void {
    EPLogger.tslogger.warn(message);
  }

  public static error(message: string): void {
    EPLogger.tslogger.error(message);
  }

}

EPLogger.generateSingleton();

export {EPLogger};