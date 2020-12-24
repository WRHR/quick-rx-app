function resetYN({ states, setStates }) {
  setStates.forEach((set, i) => {
    set(states[i])= null;
  });
}
