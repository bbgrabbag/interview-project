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
  const prom = new Promise<Spice>((resolveOuter, reject) => {
    setTimeout(() => {
      const spice = spices.find((spice) => spice.name === name);
      if (!spice) return reject(Error(`No spice found with name: '${name}'`))
      resolveOuter(spice as Spice)
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
  const prom = new Promise<Blend>((resolveOuter, reject) => {
    setTimeout(() => {
      const blend = blends.find((blend) => blend.name === name);
      if (!blend) return reject(Error(`No blend found with name: '${name}'`))

      resolveOuter(blends.find((blend) => blend.name === name) as Blend)
    }, 2000)
  });

  return prom
}

