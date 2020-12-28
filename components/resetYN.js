export default function resetYN(setters ) {
  setters.forEach(set => {
    
    set(null)
  });
}
