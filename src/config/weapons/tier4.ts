import { Weapon } from 'types/weapons';

export default [
  {
    action: 'WEAPON:RIFLE_LEVER_01_ACTION',
    caliber: 'WEAPON:RIFLE_LEVER_01_CALIBER',
    description: 'WEAPON:RIFLE_LEVER_01_DESCRIPTION',
    heading: 'WEAPON:RIFLE_LEVER_01_HEADING',
    hitEnergy: [1658, 1553, 1445, 1346, 1170],
    slug: 'grandpas-old-rifle',
    tier: 4,
  },
  {
    action: 'WEAPON:BOW_04_ACTION',
    description: 'WEAPON:BOW_04_DESCRIPTION',
    heading: 'WEAPON:BOW_04_HEADING',
    hitEnergy: [29, 0, 0, 0, 0],
    slug: 'skye-gavi-wonder',
    tier: 4,
  },
] as Array<Weapon>;
