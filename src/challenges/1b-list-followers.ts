function listFollowers(followerNames: string[]): string {
  const [firstFollower, secondFolllower] =followerNames;
  const message : string= `Followed by ${firstFollower}, ${secondFolllower} and others`
  return message;
  //"Followed by @barackobama, @STORMZYOFFICIAL and others"
}

export default listFollowers;
