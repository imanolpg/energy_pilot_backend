// cell number type
export type CellNumber = 1 | 2 | 3

/**
 * Interface for receiving objec in addVoltaje
 */
export interface CurrentReceivedJson {
  date: string
  lecture: number
}

/**
 * Interface for receiving objec in addCurrentData
 */
export interface VoltajeReceivedJson {
  date: string
  lecture: number
  cell: CellNumber
}
