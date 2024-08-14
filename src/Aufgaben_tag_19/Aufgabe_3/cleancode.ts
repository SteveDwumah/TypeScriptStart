enum TaskType {
    Urgent = 4,
    NotUrgent = 2,
    Info = 1
  }
  
  type Task = { name: string; type: TaskType };
  
  const username: string = "John Doe";
  let taskNames: string[] = [];
  let tasks: Task[] = [];
  
  // Funktion zum Erstellen einer Aufgabe
  function createTask(): void {
    const taskInput: string | null = prompt('Bitte geben Sie eine Aufgabe ein:');
    const taskName: string = taskInput || '';
  
    if (taskName) {
      taskNames.push(taskName);
      const newTask: Task = { name: taskName, type: TaskType.NotUrgent };
      tasks.push(newTask);
      console.log(`Aufgabe erstellt: ${taskName} von ${username}`);
    }
  }
  
  // Aufgaben erstellen
  for (let i = 0; i < 3; i++) {
    createTask();
  }
  
  // Überflüssige leere Aufgaben entfernen
  taskNames = taskNames.filter(name => name !== '');
  tasks = tasks.filter(task => task.name !== '');
  
  // Aufgaben filtern und sortieren
  if (taskNames.length > 0) {
    sortTasks(taskNames, 'asc');
    sortTasks(tasks.map(task => task.name), 'asc');
  }
  
  // Ausgabe der maximalen Anzahl der Aufgaben
  const maxTaskCount: number = calculateMaxTasks();
  console.log(`Die maximale Anzahl der Aufgaben ist: ${maxTaskCount}`);
  
  if (taskNames.length > 0 && taskNames.length <= 3 && tasks.length > 0 && tasks.length <= 3) {
    console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 3.');
  } else if (taskNames.length > maxTaskCount) {
    console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
  }
  
  // Aufgaben verarbeiten (Platzhalterfunktion)
  processTasks();
  
  // Hilfsfunktionen
  function sortTasks(array: string[], order: 'asc' | 'desc'): string[] {
    const sortedArray: string[] = [...array];
    if (order === 'asc') {
      sortedArray.sort((a, b) => a.localeCompare(b));
    } else {
      sortedArray.sort((a, b) => b.localeCompare(a));
    }
    return sortedArray;
  }
  
  function calculateMaxTasks(): number {
    let result: number = 0;
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
          result += i + j + k;
        }
      }
    }
    return result;
  }
  
  // Diese Funktion wird später implementiert
  function processTasks(): void {
    console.log('implement later');
  }