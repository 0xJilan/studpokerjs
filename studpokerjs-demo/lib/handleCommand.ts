export const handleCommand = (commandInput: string): string => {
  console.log(commandInput);
  return commandInput === "PING" ? "PONG" : "Command not found!";
};
