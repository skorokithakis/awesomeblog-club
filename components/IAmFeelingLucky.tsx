import { store } from "../utils/store";

export function IAmFeelingLucky() {
  function handleClick() {
    window.open(store.getRandomBlog().website, "_blank");
  }
  return <button onClick={handleClick}>I am feeling lucky</button>;
}
