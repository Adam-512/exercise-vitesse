export function getImg(name: string) {
  const path = `/src/assets/${name}`
  const modules = import.meta.globEager('/src/assets/*.(png|jpg|svg)')
  return modules[path].default
}
