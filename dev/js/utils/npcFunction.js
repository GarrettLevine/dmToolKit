import * as data from './npcData';
function randomArrayChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function createName(arr1, arr2, arr3) {
  const name1 = randomArrayChoice(arr1);
  const name2 = randomArrayChoice(arr2);
  const name3 = randomArrayChoice(arr3); 

  return name1 + name2 + name3;
}

export function createCharacter() {
  const alignment = randomArrayChoice(Object.keys(data.alignmentIdealsObj));
  return {
    firstName: createName(data.fnBeginning, data.fnMiddle, data.fnEnd),
    lastName: createName(data.lnBeginning, data.lnMiddle, data.lnEnd),
    race: randomArrayChoice(data.npcRace),
    feature: randomArrayChoice(data.npcFeature),
    highAbility: randomArrayChoice(Object.keys(data.highAbilityObj)),
    lowAbility: randomArrayChoice(Object.keys(data.lowAbilityObj)),
    talent: randomArrayChoice(data.npcTalents),
    mannerisms: randomArrayChoice(data.npcMannerisms),
    interaction: randomArrayChoice(data.npcInteraction),
    alignment,
    ideal: randomArrayChoice(data.alignmentIdealsObj[alignment]),
    bond: randomArrayChoice(data.npcBonds),
    flaw: randomArrayChoice(data.npcFlawSecret),
  };
};