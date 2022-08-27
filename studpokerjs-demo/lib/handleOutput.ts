const Commands: any = {
  PLAY: "RUN STUDPOKER..",
};
export const handleOutput = (commandInput: string): string => {
  return Commands[commandInput] || "Command not found!";
};
