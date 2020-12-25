export default function resetYN({ states, setStates }) {
  // setStates.forEach((set, i) => {
  //   set(states[i]) = null;
  for (let i = 0; i< states.length; i++){
    setStates[i](state[i]) 
  };
}
