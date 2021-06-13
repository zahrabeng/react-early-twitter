import removeFinalCharacter from "./removeFinalCharacter";

export type TimeUnit = "minutes" | "hours" | "days";

function formTimeString(count: number, unit: TimeUnit): string {
  // remove the final character from unit if count is exactly 1
  const compensatedUnit = count === 1 ? removeFinalCharacter(unit) : unit

  if (unit === 'hours') {
    return `about ${count} ${compensatedUnit}`
  } else {
    return `${count} ${compensatedUnit}`
  }
};

export default formTimeString
