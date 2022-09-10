import { accommodations } from 'assets/datas/datas.json'

export const getAccommodation = (id) => {
  const accommodation = accommodations.filter((x) => x.id === id)
  // console.log(accommodation)
  return accommodation
}
