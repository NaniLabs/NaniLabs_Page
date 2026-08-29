import { useState, useEffect } from 'react'
import { projects as initialProjects } from '@/utils/content'
import type { ProjectData } from '@/data/types'

interface ReleasesPayload {
  schemaVersion?: number
  latest?: string
  releases?: Array<{
    version?: string
    status?: string
    title?: string
    date?: string
  }>
}

// Module-level cache to share fetched data across components and re-renders
let cachedProjects: ProjectData[] | null = null
let fetchPromise: Promise<ProjectData[]> | null = null

function formatStatus(rawStatus?: string, version?: string): string {
  if (!version) return rawStatus ?? 'En desarrollo'
  if (!rawStatus) return `v${version}`

  const cleanStatus = rawStatus.trim().toLowerCase()
  if (cleanStatus === 'beta') return `Beta ${version}`
  if (cleanStatus === 'stable' || cleanStatus === 'finalizado') return `v${version}`
  if (cleanStatus === 'alpha') return `Alpha ${version}`

  // Capitalize first letter
  return `${cleanStatus.charAt(0).toUpperCase() + cleanStatus.slice(1)} ${version}`
}

async function fetchLiveProjects(): Promise<ProjectData[]> {
  if (cachedProjects) return cachedProjects

  // Try reading from sessionStorage
  try {
    const sessionCached = sessionStorage.getItem('nanilabs_projects_cache')
    if (sessionCached) {
      const parsed = JSON.parse(sessionCached) as ProjectData[]
      if (Array.isArray(parsed) && parsed.length > 0) {
        cachedProjects = parsed
        return parsed
      }
    }
  } catch {
    // Ignore storage parse error
  }

  const updatedProjects = await Promise.all(
    initialProjects.map(async (project) => {
      if (!project.releaseSource) return project

      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 4000)

        const response = await fetch(project.releaseSource, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })
        clearTimeout(timeoutId)

        if (!response.ok) return project

        const data: ReleasesPayload = await response.json()
        const latestRelease = data.releases?.[0]
        const version = data.latest || latestRelease?.version

        if (!version) return project

        const status = latestRelease?.title || formatStatus(latestRelease?.status, version)

        return {
          ...project,
          version,
          status,
        }
      } catch {
        // Fallback gracefully on network error or timeout
        return project
      }
    })
  )

  cachedProjects = updatedProjects

  try {
    sessionStorage.setItem('nanilabs_projects_cache', JSON.stringify(updatedProjects))
  } catch {
    // Ignore storage write error
  }

  return updatedProjects
}

export function useProjects() {
  const [projectsList, setProjectsList] = useState<ProjectData[]>(cachedProjects ?? initialProjects)

  useEffect(() => {
    let isMounted = true

    if (!fetchPromise) {
      fetchPromise = fetchLiveProjects()
    }

    fetchPromise.then((data) => {
      if (isMounted) {
        setProjectsList(data)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  const featuredProjects = projectsList.filter((p) => p.featured)
  const regularProjects = projectsList.filter((p) => !p.featured)
  const getProjectById = (id: string) => projectsList.find((p) => p.id === id)

  return {
    projects: projectsList,
    featuredProjects,
    regularProjects,
    getProjectById,
  }
}
