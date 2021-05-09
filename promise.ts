import axios from 'axios'

export const getDataFromApi = async (url: string): Promise<Array<any>> => {
  const {data} = await axios.get(url)
  return data
}