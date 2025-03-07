const manager = new Manager();
Gomszab.addFileUploader(fileResult => {
  const fileLines = fileResult.split('\n');
  for(const line of fileLines){
    const fields = line.split(';');
    const correct= fields[1].trim() === '1' ? true: false;

    const card = new Card(fields[0], correct);
    manager.add(card);
  }
  manager.start();
})
const deckArea = new DeckArea('deck', manager);
const solutionArea = new SolutionArea('solution', manager);

const exportbutton = document.createElement('button');
exportbutton.textContent = 'letoltes'
document.body.appendChild(exportbutton)
exportbutton.addEventListener('click', () => {
  const a = document.createElement('a')
  const content = ""
  const file = new Blob([content])
  a.download = "newdata.csv"
  a.href = URL.createObjectURL(file)
  a.click();
  URL.revokeObjectURL(a.href);  
})