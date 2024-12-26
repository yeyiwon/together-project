import { atom } from 'jotai';

import { type SortBy } from '~/src/services/gatherings/types';
import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export const gatheringTypeAtom = atom<GatheringType>('DALLAEMFIT');

export const gatheringLocationAtom = atom<GatheringLocation | undefined>();

export const gatheringDateAtom = atom();

export const gatheringSortByAtom = atom<SortBy>();
