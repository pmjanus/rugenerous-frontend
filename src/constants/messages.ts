export const messages = {
  please_connect: "Please connect your wallet to the Avalanche network to use RuGenerous.",
  please_connect_wallet: "Please connect your wallet.",
  try_mint_more: (value: string) =>
    `You're trying to mint more than the maximum payout available! The maximum mint payout is ${value} $RUG.`,
  before_minting: "Before minting, enter a value.",
  existing_mint:
    "You have an existing mint. Minting will reset your vesting period and forfeit any pending claimable rewards. We recommend claiming rewards first or using a fresh wallet. Do you still wish to proceed?",
  before_redeem: "Before Redeeming USDC, enter an amount of RUG to be swapped.",
  before_stake: "Before staking, enter a value.",
  before_unstake: "Before un staking, enter a value.",
  tx_successfully_send: "Your transaction was successfully executed",
  your_balance_updated: "Your balance was successfully updated",
  nothing_to_claim: "You have nothing to claim",
  something_wrong: "Something went wrong",
  switch_to_avalanche: "Switch to the Avalanche network?",
  slippage_too_small: "Slippage too small",
  slippage_too_big: "Slippage too big",
  your_balance_update_soon: "Your balance will update soon",
  before_wrap: "Before wrapping, enter a value.",
  before_unwrap: "Before un wrapping, enter a value.",
};
