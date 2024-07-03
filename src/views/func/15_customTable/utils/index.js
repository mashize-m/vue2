export const getParamByUrl = async (name, require = true, url) => {
  let after = url ? url.split('?')[1] : location.hash.split('?')[1] || location.search.split('?')[1]
  if (!after) throw new Error(`The parameter [${name}] is required`)
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = after.match(reg)
  if (!r) throw new Error(`The parameter [${name}=] is required`)
  if (!require || (require && r[2])) {
    return decodeURIComponent(r[2])
  } else {
    throw new Error(`The parameter [${name}] value is required`)
  }
}
