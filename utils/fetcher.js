export const fetchDatas = async () => {
  const datas = await fetch('../assets/datas/datas.json')
    .then((res) => res.json)
    .then((data) => data)
  return datas
}
