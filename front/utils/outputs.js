export const OUTPUTS_RULES = [
  "GOAL: GET A 5 CARDS POKER HAND HIGHER THAN BANK",
  "BEFORE CARDS BEING DEALT YOU NEEDS TO WAGER (ANTE)",
  "YOU RECEIVE 5 CARDS & DEALER ONE",
  "DECIDE IF YOU WISH TO ‘BET’ OR ‘FOLD’",
  "THINK YOUR HAND WILL BEAT THE DEALER? 'BET' TWICE YOUR INITIAL ANTE",
  "ELSE, FOLD & LOSE YOUR ANTE",
  "TO QUALIFY, THE BANK NEEDS AS/KING OR BETTER",
  "IF DEALER NOT QUALIFY, YOUR 'ANTE' BET IS PAID EVEN MONEY",
  "IF BANK'S HAND BEATS OR IS EQUAL TO YOURS , BANK WINS YOUR BET & ANTE",
  "OTHERWISE, YOU WIN YOUR BET MULTIPLIED BY THE PAYOUT AND GET YOUR ANTE BACK",
];
export const OUTPUTS_PAYOUTS = [
  "ROYAL FLUSH.....................100 to 1",
  "STRAIGHT FLUSH...............50 to 1",
  "FOUR OF A KIND.................20 to 1",
  "FULL HOUSE...........................7 to 1",
  "FLUSH.......................................5 to 1",
  "STRAIGHT................................4 to 1",
  "THREE OF A KIND..................3 to 1",
  "TWO PAIRS.................................2 to 1",
  "ONE PAIR.................................1 to 1",
];

export const OUTPUTS_COMMANDS = {
  MENU: ["FAUCET", "PLAY", "DEMO", "CLEAR"],
  PLAY: ["DEAL", "EXIT", "CLEAR"],
  DEAL: ["BET", "FOLD", "CLEAR"],
};

export const OUTPUTS_ERRORS = {
  FAUCET: {
    funded: "NO! YOU HAVE ENOUGH TO GAMBLE FREN..",
  },
  PLAY: {
    fund: "TO PLAY YOU NEED MINIMUM 300$. PLEASE USE 'FAUCET' COMMAND",
  },
};

export const OUTPUTS_RESPONSES = {
  FAUCET: {
    error: "NO! YOU HAVE ENOUGH TO GAMBLE FREN..",
    succes: "SEND 1000$!",
  },
  PLAY: {
    error: "TO PLAY YOU NEED MINIMUM 300$. PLEASE USE 'FAUCET' COMMAND",
    succes: "ENTER 'DEAL' TO RECEIVE CARDS. COST: 100$",
  },
  DEAL: {
    error: "TO PLAY YOU NEED MINIMUM 300$. PLEASE USE 'FAUCET' COMMAND",
    succes:
      "IF YOU THINK YOUR HAND WILL WIN ?  ENTER 'BET' TO CONTINUE (COST: 200$) OR 'FOLD' AND LOSE YOUR ANTE",
  },
  FOLD: {
    succes: "YOU FOLD",
  },
  BET: {
    loose: "YOU LOOSE",
    unqualified: "YOU WIN - BANK IS NOT QUALIFIED",
    win: "YOU WIN",
  },
};
