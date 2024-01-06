import spices from './spices'
import blends from './blends'
import { Blend, Spice } from '@/common/types';

export const fetchSpices = async (filterByIds?: number[]) => {
  const prom = new Promise<Spice[]>((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(spices.filter(spice => !filterByIds || filterByIds.includes(spice.id)) as Spice[])
    }, 2000)
  });

  return prom
}

export const fetchSpice = async (name: string) => {
  const prom = new Promise<Spice>((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(spices.find((spice) => spice.name === name) as Spice)
    }, 2000)
  });

  return prom
}

export const fetchBlends = async (filterByIds?: number[]) => {
  const prom = new Promise<Blend[]>((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(blends.filter(blend => !filterByIds || filterByIds.includes(blend.id)))
    }, 2000)
  });

  return prom
}

export const fetchBlend = async (name: string) => {
  const prom = new Promise<Blend>((resolveOuter) => {
    setTimeout(() => {
      resolveOuter(blends.find((blend) => blend.name === name) as Blend)
    }, 2000)
  });

  return prom
}

