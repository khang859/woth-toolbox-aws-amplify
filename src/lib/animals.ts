import { Animal, AnimalGroup } from 'types/animals';

/**
 * Sort animals first by tier and then by name
 *
 * @param animals List of animals to sort
 */
const getSortedAnimals = (animals: Array<Animal>) =>
  [...animals].sort((a, b) =>
    a.tier !== b.tier
      ? // First sort by tier
        a.tier - b.tier
      : // Next sort by animal name within the tier
        a.name.localeCompare(b.name),
  );

/**
 * Group animals by their tier
 *
 * @param animals List of animals to group
 */
export const getAnimalGroups = (animals: Array<Animal>) =>
  getSortedAnimals(animals).reduce<Array<AnimalGroup>>((groups, animal) => {
    // Attempt to find the existing group for the current tier
    const group = groups.find(g => g.tier === animal.tier);

    // Create a new group if it doesn't exist
    if (!group) {
      return [...groups, { animals: [animal], tier: animal.tier }];
    }

    return groups.map(group => {
      // Update existing group by adding the animal
      if (group.tier === animal.tier) {
        return { ...group, animals: [...group.animals, animal] };
      }

      return group;
    });
  }, []);