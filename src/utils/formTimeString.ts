import removeFinalCharacter from "./removeFinalCharacter";

export type TimeUnit = "minutes" | "hours" | "days";

/**
 * Generate a string representing the amount of time
 * @param count how many of the time unit there are
 * @param unit the unit of time
 * @returns a formatted time string
 */
function formTimeString(count: number, unit: TimeUnit): string {
  // remove the final character from unit if count is exactly 1
  const compensatedUnit = count === 1 ? removeFinalCharacter(unit) : unit

  if (unit === 'hours') {
    return `about ${count} ${compensatedUnit}`
  } else {
    return `${count} ${compensatedUnit}`
  }
}

export default formTimeString
