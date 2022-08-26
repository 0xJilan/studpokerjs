enum Commands {
  PLAY = "RUN STUDPOKER..",
  RULES = "RULES",
  SIMULATION = "SIMULATION",
  DOCS = "DOCUS OPENES ON NEW TAB",
  NPM = "NPM OPENED ON NEW TAB",
  GITHUB = "GITHUB OPENED ON NEW TAB",
  TWITTER = "TWITTER OPENED ON NEW TAB",
}
export const handleOutput = (commandInput: string): string => {
  return Commands[commandInput] || "Command not found!";
};
