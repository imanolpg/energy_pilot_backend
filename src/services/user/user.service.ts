import { Current } from '../../database/models/current.model'
import { Voltaje } from '../../database/models/voltaje.model'
import { CurrentSaveData, VoltajeSaveData } from '../../types/types'
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

async function saveVoltajeData (voltajeData: VoltajeSaveData): Promise<void> {
  const voltaje: Voltaje = new Voltaje()
  voltaje.date = voltajeData.date
  voltaje.lecture = voltajeData.lecture
  voltaje.cellNumber = voltajeData.cellNumber
  voltaje.user = voltajeData.userId
  await voltaje.save()
    .catch((e: Error) => {
      EPLogger.error(e.message)
      throw Error('Cant save voltaje data')
    })
}

export default {
  saveCurrentData,
  saveVoltajeData
}
