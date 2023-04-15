import { Json } from 'sequelize/types/utils'

async function saveCurrentData (currentData: Json): Promise<void> {
  console.log(currentData)
}

export default {
  saveCurrentData
}
