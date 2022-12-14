import { Animal, AnimalActivity } from 'types/animals';

export const animals: Array<Animal> = [
  // Tier 1
  {
    description: 'ANIMAL:LEPUS_EUROPAEUS_DESCRIPTION',
    heading: 'ANIMAL:LEPUS_EUROPAEUS_HEADING',
    hitEnergy: [356, 1068],
    latin: 'ANIMAL:LEPUS_EUROPAEUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Feeding, time: 0 },
      { activity: AnimalActivity.Sleeping, time: 3 },
      { activity: AnimalActivity.Feeding, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 17 },
    ],
    slug: 'european-hare',
    tier: 1,
    type: 'animal:european hare',
  },
  {
    description: 'ANIMAL:LEPUS_AMERICANUS_DESCRIPTION',
    heading: 'ANIMAL:LEPUS_AMERICANUS_HEADING',
    hitEnergy: [56, 628],
    latin: 'ANIMAL:LEPUS_AMERICANUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Feeding, time: 0 },
      { activity: AnimalActivity.Sleeping, time: 3 },
      { activity: AnimalActivity.Feeding, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 17 },
    ],
    slug: 'showshoe-hare',
    tier: 1,
    type: 'animal:showshoe hare',
  },

  // Tier 3
  {
    description: 'ANIMAL:TAXIDEA_TAXUS_DESCRIPTION',
    heading: 'ANIMAL:TAXIDEA_TAXUS_HEADING',
    hitEnergy: [612, 1836],
    latin: 'ANIMAL:TAXIDEA_TAXUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'american-badger',
    tier: 3,
    type: 'animal:american badger',
  },
  {
    description: 'ANIMAL:MELES_MELES_DESCRIPTION',
    heading: 'ANIMAL:MELES_MELES_HEADING',
    hitEnergy: [700, 2100],
    latin: 'ANIMAL:MELES_MELES_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'eurasian-badger',
    tier: 3,
    type: 'animal:eurasian badger',
  },
  {
    description: 'ANIMAL:VULPES_VULPES_DESCRIPTION',
    heading: 'ANIMAL:VULPES_VULPES_HEADING',
    hitEnergy: [612, 1836],
    latin: 'ANIMAL:VULPES_VULPES_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'red-fox',
    tier: 3,
    type: 'animal:red fox',
  },

  // Tier 4
  {
    description: 'ANIMAL:CAPREOLUS_CAPREOLUS_DESCRIPTION',
    heading: 'ANIMAL:CAPREOLUS_CAPREOLUS_HEADING',
    hitEnergy: [945, 2458],
    latin: 'ANIMAL:CAPREOLUS_CAPREOLUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'roe-deer',
    tier: 4,
    type: 'animal:roe deer',
  },
  {
    description: 'ANIMAL:CANIS_AUREUS_DESCRIPTION',
    heading: 'ANIMAL:CANIS_AUREUS_HEADING',
    hitEnergy: [350, 2000],
    latin: 'ANIMAL:CANIS_AUREUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'golden-jackal',
    tier: 4,
    type: 'animal:golden jackal',
  },

  // Tier 5
  {
    description: 'ANIMAL:OVIS_CANADENSIS_DESCRIPTION',
    heading: 'ANIMAL:OVIS_CANADENSIS_HEADING',
    hitEnergy: [1669, 4005],
    latin: 'ANIMAL:OVIS_CANADENSIS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'bighorn-sheep',
    tier: 5,
    type: 'animal:bighorn sheep',
  },
  {
    description: 'ANIMAL:RUPICAPRA_RUPICAPRA_DESCRIPTION',
    heading: 'ANIMAL:RUPICAPRA_RUPICAPRA_HEADING',
    hitEnergy: [1323, 3439],
    latin: 'ANIMAL:RUPICAPRA_RUPICAPRA_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'chamois',
    tier: 5,
    type: 'animal:chamois',
  },
  {
    description: 'ANIMAL:DAMA_DAMA_DESCRIPTION',
    heading: 'ANIMAL:DAMA_DAMA_HEADING',
    hitEnergy: [1462, 3510],
    latin: 'ANIMAL:DAMA_DAMA_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'fallow-deer',
    tier: 5,
    type: 'animal:fallow deer',
  },
  {
    description: 'ANIMAL:CANIS_LUPUS_DESCRIPTION',
    heading: 'ANIMAL:CANIS_LUPUS_HEADING',
    hitEnergy: [1165, 3029],
    latin: 'ANIMAL:CANIS_LUPUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'gray-wolf',
    tier: 5,
    type: 'animal:gray wolf',
  },
  {
    description: 'ANIMAL:OVIS_MUSIMON_DESCRIPTION',
    heading: 'ANIMAL:OVIS_MUSIMON_HEADING',
    hitEnergy: [1345, 3498],
    latin: 'ANIMAL:OVIS_MUSIMON_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'mouflon',
    tier: 5,
    type: 'animal:mouflon',
  },
  {
    description: 'ANIMAL:OREAMNOS_AMERICANUS_DESCRIPTION',
    heading: 'ANIMAL:OREAMNOS_AMERICANUS_HEADING',
    hitEnergy: [1515, 3636],
    latin: 'ANIMAL:OREAMNOS_AMERICANUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'mountain-goat',
    tier: 5,
    type: 'animal:mountain goat',
  },
  {
    description: 'ANIMAL:ODOCOILEUS_HEMIONUS_DESCRIPTION',
    heading: 'ANIMAL:ODOCOILEUS_HEMIONUS_HEADING',
    hitEnergy: [1576, 3783],
    latin: 'ANIMAL:ODOCOILEUS_HEMIONUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'mule-deer',
    tier: 5,
    type: 'animal:mule deer',
  },
  {
    description: 'ANIMAL:ODOCOILEUS_VIRGINIANUS_DESCRIPTION',
    heading: 'ANIMAL:ODOCOILEUS_VIRGINIANUS_HEADING',
    hitEnergy: [1543, 3705],
    latin: 'ANIMAL:ODOCOILEUS_VIRGINIANUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'white-tailed-deer',
    tier: 5,
    type: 'animal:white-tailed deer',
  },
  {
    description: 'ANIMAL:SUS_SCROFA_DESCRIPTION',
    heading: 'ANIMAL:SUS_SCROFA_HEADING',
    hitEnergy: [1625, 3900],
    latin: 'ANIMAL:SUS_SCROFA_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'wild-boar',
    tier: 5,
    type: 'animal:wild boar',
  },

  // Tier 6
  {
    description: 'ANIMAL:URSUS_AMERICANUS_DESCRIPTION',
    heading: 'ANIMAL:URSUS_AMERICANUS_HEADING',
    hitEnergy: [2889, 4911],
    latin: 'ANIMAL:URSUS_AMERICANUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'american-black-bear',
    tier: 6,
    type: 'animal:american black bear',
  },
  {
    description: 'ANIMAL:URSUS_ARCTOS_DESCRIPTION',
    heading: 'ANIMAL:URSUS_ARCTOS_HEADING',
    hitEnergy: [2835, 5386],
    latin: 'ANIMAL:URSUS_ARCTOS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    slug: 'brown-bear',
    tier: 6,
    type: 'animal:brown bear',
  },
  {
    description: 'ANIMAL:CERVUS_CANADENSIS_DESCRIPTION',
    heading: 'ANIMAL:CERVUS_CANADENSIS_HEADING',
    hitEnergy: [2912, 5532],
    latin: 'ANIMAL:CERVUS_CANADENSIS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'elk',
    tier: 6,
    type: 'animal:elk',
  },
  {
    description: 'ANIMAL:ALCES_AMERICANUS_DESCRIPTION',
    heading: 'ANIMAL:ALCES_AMERICANUS_HEADING',
    hitEnergy: [3088, 5867],
    latin: 'ANIMAL:ALCES_AMERICANUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'moose',
    tier: 6,
    type: 'animal:moose',
  },
  {
    description: 'ANIMAL:CERVUS_ELAPHUS_DESCRIPTION',
    heading: 'ANIMAL:CERVUS_ELAPHUS_HEADING',
    hitEnergy: [2693, 4579],
    latin: 'ANIMAL:CERVUS_ELAPHUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    slug: 'red-deer',
    tier: 6,
    type: 'animal:red deer',
  },
];

export const birds: Array<Animal> = [
  {
    description: 'ANIMAL:ANSER_ANSER_DESCRIPTION',
    heading: 'ANIMAL:ANSER_ANSER_HEADING',
    hitEnergy: [1, 681],
    latin: 'ANIMAL:ANSER_ANSER_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    slug: 'greylag-goose',
    tier: 1,
    type: 'animal:greylag goose',
  },
  {
    description: 'ANIMAL:AYTHYA_AFFINIS_DESCRIPTION',
    heading: 'ANIMAL:AYTHYA_AFFINIS_HEADING',
    hitEnergy: [1, 174],
    latin: 'ANIMAL:AYTHYA_AFFINIS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    slug: 'lesser-scaup',
    tier: 1,
    type: 'animal:lesser scaup',
  },
  {
    description: 'ANIMAL:PHASIANUS_COLCHICUS_DESCRIPTION',
    heading: 'ANIMAL:PHASIANUS_COLCHICUS_HEADING',
    hitEnergy: [1, 402],
    latin: 'ANIMAL:PHASIANUS_COLCHICUS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    slug: 'pheasant',
    tier: 1,
    type: 'animal:pheasant',
  },
  {
    description: 'ANIMAL:ANAS_PLATYRHYNCHOS_DESCRIPTION',
    heading: 'ANIMAL:ANAS_PLATYRHYNCHOS_HEADING',
    hitEnergy: [1, 255],
    latin: 'ANIMAL:ANAS_PLATYRHYNCHOS_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    slug: 'wild-duck',
    tier: 1,
    type: 'animal:wild duck',
  },
  {
    description: 'ANIMAL:ANSER_ROSSII_DESCRIPTION',
    heading: 'ANIMAL:ANSER_ROSSII_HEADING',
    hitEnergy: [1, 279],
    latin: 'ANIMAL:ANSER_ROSSII_LATIN',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    slug: 'ross-goose',
    tier: 1,
    type: 'animal:ross goose',
  },
];
