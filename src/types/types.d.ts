import { Request } from 'express'

// cell number type
export type CellNumber = 1 | 2 | 3

/**
 * Type for receiving objec in addCurrentData controller
 */
export interface CurrentReceivedJson {
  date: string
  lecture: number
}

/**
 * Type for passing object to saveCurrentData service
 */
export interface CurrentSaveData {
  date: string
  lecture: number
  userId: number
}

/**
 * Interface for receiving objec in addJsonData
 */
export interface VoltajeReceivedJson {
  date: string
  lecture: number
  cellNumber: number
}

/**
 * Interface for passing objec to addCurrentData service
 */
export interface VoltajeSaveData {
  date: string
  lecture: number
  cellNumber: number
  userId: number
}

/**
 * Extend Express Request to add user file for JWT
 */
export interface RequestWithUser extends Request {
  userId?: number
}
