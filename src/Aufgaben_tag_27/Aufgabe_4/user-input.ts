function greetUser() {
    try {
        const username: string | null = window.prompt("Bitte geben Sie Ihren Namen ein:");

        if (!username) {
            window.prompt("Bitte geben Sie Ihren Namen ein:");
        }

        console.log(`Hallo, ${username}! Schön, dich zu sehen.`);
    } catch (error) {
        console.error(error);
        console.log("Hallo! Schön, dich zu sehen.");
    }
}
greetUser()