import { Request, Response } from 'express'
import { UserService } from '../../services'
import { CurrentReceivedJson, CurrentSaveData, VoltajeReceivedJson, VoltajeSaveData } from '../../types/types'

async function toNewCurrentDataService (receivedObject: CurrentReceivedJson): Promise<CurrentSaveData> {
  const newCurrentData: CurrentSaveData = Object.assign(receivedObject,
    {
      user: 1
    })
  return newCurrentData
}

async function toNewVoltajeDataService (receivedObject: VoltajeReceivedJson): Promise<VoltajeSaveData> {
  const newVoltaje: VoltajeSaveData = Object.assign(receivedObject, {
    user: 1
  })
  return newVoltaje
}

function saveCurrentData (req: Request, res: Response): void {
  toNewCurrentDataService(req.body)
    .then(async (parsedData: CurrentSaveData) => await UserService.saveCurrentData(parsedData))
    .then(() => {
      res.send('Current added')
    })
    .catch((e: Error) => {
      res.status(500).send(e.message)
    })
}

function saveVoltajeData (req: Request, res: Response): void {
  toNewVoltajeDataService(req.body)
    .then(async (parsedData: VoltajeSaveData) => await UserService.saveVoltajeData(parsedData))
    .then(() => {
      res.send('Voltaje added')
    })
    .catch((e: Error) => {
      res.status(500).send(e.message)
    })
}

export default {
  saveCurrentData,
  saveVoltajeData
}
