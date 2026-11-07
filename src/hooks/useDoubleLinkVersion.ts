import { useProjects } from './useProjects'

export function useDoubleLinkVersion() {
  const { getProjectById } = useProjects()
  return getProjectById('doublelink')?.status ?? 'Disponible'
}
