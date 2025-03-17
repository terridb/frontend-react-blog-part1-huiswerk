export function calculateReadingTime(text) {
    const postWordArray = text.split(" ");
    const readingSpeed = 100 / 0.3;
    return Math.round(postWordArray.length / readingSpeed);
}