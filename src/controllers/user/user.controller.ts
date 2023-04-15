import { Response } from 'express'
import { UserService } from '../../services'
import { CurrentReceivedJson, CurrentSaveData, RequestWithUser, VoltajeReceivedJson, VoltajeSaveData } from '../../types/types'

async function toNewCurrentDataService (receivedObject: CurrentReceivedJson, userId: number): Promise<CurrentSaveData> {
  const newCurrentData: CurrentSaveData = Object.assign(receivedObject,
    {
      userId
    })
  return newCurrentData
}

async function toNewVoltajeDataService (receivedObject: VoltajeReceivedJson, userId: number): Promise<VoltajeSaveData> {
  const newVoltaje: VoltajeSaveData = Object.assign(receivedObject, {
    userId
  })
  return newVoltaje
}

function saveCurrentData (req: RequestWithUser, res: Response): void {
  // check that req.userId is present
  if (req.userId === undefined) {
    res.status(500).send('Internal server error')
    return
  }

  toNewCurrentDataService(req.body, req.userId)
    .then(async (parsedData: CurrentSaveData) => await UserService.saveCurrentData(parsedData))
    .then(() => {
      res.send('Current added')
    })
    .catch((e: Error) => {
      res.status(500).send(e.message)
    })
}

function saveVoltajeData (req: RequestWithUser, res: Response): void {
  // check that req.userId is present
  if (req.userId === undefined) {
    res.status(500).send('Internal server error')
    return
  }

  toNewVoltajeDataService(req.body, req.userId)
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
