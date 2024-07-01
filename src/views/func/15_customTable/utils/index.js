export const getParamByUrl = async (name, require = true, url) => {
  let after = url ? url.split('?')[1] : location.hash.split('?')[1] || location.search.split('?')[1]
  if (after) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = after.match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    } else {
      if (require) throw new Error('The parameter [' + name + '] is required')
      return null
    }
  }
}
