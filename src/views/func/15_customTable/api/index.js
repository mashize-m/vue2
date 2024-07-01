import { get, post } from '@/utils/request'

// 查询
export async function queryData (payload) {
  const res = await get('/qyzznew/jsscV3/scyj/yjjbnt/info', payload)
  return res
}

// 保存
export async function saveData (payload) {
  const res = await post('/qyzznew/jsscV3/scyj/yjjbnt/save', payload)
  return res
}
