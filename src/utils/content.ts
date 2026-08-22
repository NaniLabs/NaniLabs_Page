import siteData from '@/data/site.json'
import projectsData from '@/data/projects.json'
import type { SiteData, ProjectData, ProjectsFile } from '@/data/types'

export const site = siteData as SiteData
export const projects = (projectsData as ProjectsFile).projects

export function getFeaturedProjects(): ProjectData[] {
  return projects.filter((p) => p.featured)
}

export function getRegularProjects(): ProjectData[] {
  return projects.filter((p) => !p.featured)
}

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find((p) => p.id === id)
}

export function getAllProjects(): ProjectData[] {
  return [...projects]
}