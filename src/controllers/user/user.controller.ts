import { Response } from 'express'
import { UserService } from '../../services'
import { CurrentReceivedJson, CurrentSaveData, RequestWithUser, VoltageReceivedJson, VoltageSaveData } from '../../types/types'

async function toNewCurrentDataService (receivedObject: CurrentReceivedJson, userId: number): Promise<CurrentSaveData> {
  const newCurrentData: CurrentSaveData = Object.assign(receivedObject,
    {
      userId
    })
  return newCurrentData
}

async function toNewVoltageDataService (receivedObject: VoltageReceivedJson, userId: number): Promise<VoltageSaveData> {
  const newVoltage: VoltageSaveData = Object.assign(receivedObject, {
    userId
  })
  return newVoltage
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

function saveVoltageData (req: RequestWithUser, res: Response): void {
  // check that req.userId is present
  if (req.userId === undefined) {
    res.status(500).send('Internal server error')
    return
  }

  toNewVoltageDataService(req.body, req.userId)
    .then(async (parsedData: VoltageSaveData) => await UserService.saveVoltageData(parsedData))
    .then(() => {
      res.send('Voltage added')
    })
    .catch((e: Error) => {
      res.status(500).send(e.message)
    })
}

export default {
  saveCurrentData,
  saveVoltageData
}
