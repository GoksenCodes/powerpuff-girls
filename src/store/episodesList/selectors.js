export function selectEpisodes(reduxState) {
  console.log("REDUX STATE at selector/episodes", reduxState);
  return reduxState.episodesList;
}
