import { EPLogger } from '../../../utils'

describe('Test EPLogger logger', () => {
  test(`should call '${'info'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.info('')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('INFO'))
  })

  test(`should call '${'info'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.info('testing the EPLogger info function')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testing the EPLogger info function'))
  })

  test(`should call '${'info'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.info('fs´d`ç+s3· s_;:')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('fs´d`ç+s3· s_;:'))
  })

  test(`should call '${'debug'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.debug('')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('DEBUG'))
  })

  test(`should call '${'debug'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.debug('testing the EPLogger debug function')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testing the EPLogger debug function'))
  })

  test(`should call '${'debug'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.debug('fs´d`ç+s3· s_;:')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('fs´d`ç+s3· s_;:'))
  })

  test(`should call '${'warn'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.warn('')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('WARN'))
  })

  test(`should call '${'warn'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.warn('testing the EPLogger warn function')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testing the EPLogger warn function'))
  })

  test(`should call '${'warn'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.warn('fs´d`ç+s3· s_;:')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('fs´d`ç+s3· s_;:'))
  })

  test(`should call '${'error'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.error('')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR'))
  })

  test(`should call '${'error'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.error('testing the EPLogger error function')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testing the EPLogger error function'))
  })

  test(`should call '${'error'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.error('fs´d`ç+s3· s_;:')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('fs´d`ç+s3· s_;:'))
  })

  test(`should call '${'fatal'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.fatal('')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('FATAL'))
  })

  test(`should call '${'fatal'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.fatal('testing the EPLogger fatal function')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('testing the EPLogger fatal function'))
  })

  test(`should call '${'fatal'}'`, () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    EPLogger.fatal('fs´d`ç+s3· s_;:')
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('fs´d`ç+s3· s_;:'))
  })
})
