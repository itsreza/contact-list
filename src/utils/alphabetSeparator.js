/**
 *
 * @param {Array} contacts
 * @returns {Object With Array Values} - Sorted Contact in Object With First Letter of Last Names
 * @shape { a : [{}] }
 *
 */

export const alphabetSeparator = (contacts) => {
  const sortedContacts = {};
  contacts?.map((person) => {
    const firstLetter = person?.name?.last.substring(0, 1);
    if (firstLetter in sortedContacts) {
      Object.assign(sortedContacts, {
        [firstLetter]: [...sortedContacts[firstLetter], person],
      });
    } else {
      Object.assign(sortedContacts, { [firstLetter]: [person] });
    }
    return null;
  });
  return sortedContacts;
};
