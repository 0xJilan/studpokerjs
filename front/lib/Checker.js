import { OUTPUTS_COMMANDS } from "utils/outputs";

export const isAvailableCommand = (mode, output) =>
  OUTPUTS_COMMANDS[mode].includes(output);
