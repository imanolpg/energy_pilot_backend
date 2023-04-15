import { Logger, ILogObj } from 'tslog'

const tslogger: Logger<ILogObj> = new Logger({
  name: 'EnergyPilot-Backend',
  prettyLogTemplate: '{{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} {{name}} {{fileNameWithLine}}\t'
})

function info (message: string): void {
  tslogger.info(message)
}

function debug (message: string): void {
  tslogger.debug(message)
}

function warn (message: string): void {
  tslogger.warn(message)
}

function error (message: string): void {
  tslogger.error(message)
}

export default {
  info,
  debug,
  warn,
  error
}
