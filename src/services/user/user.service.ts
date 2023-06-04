import { Current } from '../../database/models/current.model'
import { Voltage } from '../../database/models/voltage.model'
import { CurrentSaveData, VoltageSaveData } from '../../types/types'
import { EPLogger } from '../../utils'

async function saveCurrentData (currentData: CurrentSaveData): Promise<void> {
  const current: Current = new Current()
  current.date = currentData.date
  current.lecture = currentData.lecture
  current.user = currentData.userId
  await current.save()
    .catch((e: Error) => {
      EPLogger.error(e.message)
      throw Error('Cant save current data')
    })
}

async function saveVoltageData (voltageData: VoltageSaveData): Promise<void> {
  const voltage: Voltage = new Voltage()
  voltage.date = voltageData.date
  voltage.lecture = voltageData.lecture
  voltage.cellNumber = voltageData.cellNumber
  voltage.user = voltageData.userId
  await voltage.save()
    .catch((e: Error) => {
      EPLogger.error(e.message)
      throw Error('Cant save voltage data')
    })
}

export default {
  saveCurrentData,
  saveVoltageData
}
