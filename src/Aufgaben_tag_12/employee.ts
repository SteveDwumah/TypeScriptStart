type Employee = [number, string, string, number]

const employees: Employee[] = [
    [13, "Jane Doe", "Büro", 55000 ],
    [25,"Marcel Bleifuss", "Werkstatt", 52000 ],
    [123, "John Coffi", "Verkauf", 61000],
    [66, "Mohammed Ali", "Werkstatt-Karosserie", 51578],
    [31, "Janine Blue", "Lackiererei", 52370]
]
employees.forEach(employee => {
    const [nummer, name, abteilung, jahresgehalt ] = employee;
    console.log(`Nummer:  ${nummer},Name:  ${name},Abteilung:  ${abteilung}, Jahresgehalt ${jahresgehalt}`);
})
