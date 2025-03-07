export function rewriteDate(data) {
    const date = new Date(data.created);
    return date.toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
