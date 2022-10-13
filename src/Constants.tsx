const APPLIED = 'applied';
const FAILED = 'failed';

enum Period {
  PROPOSAL = "proposal",
  EXPLORATION = "exploration",
  TESTING = "testing",
  PROMOTION = "promotion",
  ADOPTION = "adoption",
  NONE = "none"
}

enum BallotValue {
  YAY = 'yay',
  NAY = 'nay',
  PASS = 'pass'
}

export default { BallotValue, Period, APPLIED, FAILED };
