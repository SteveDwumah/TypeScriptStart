export namespace TextTools{
    export const constantText = "Das ist eine Konstante"
    export function toUpperCase(text: string): string {
        return text.toUpperCase();
    }

    export function reverse(text: string): string {
        return text.split('').reverse().join('');
    }
}
