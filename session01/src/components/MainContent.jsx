function MainContent() {
    const now = new Date();
    const day = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(now);
    const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(now);
    const year = now.getFullYear();
    const time = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);

    return (
        <main>
            <p>Bonjour, on est le {day} {now.getDate()}  {month} {year} et il est {time}</p>
        </main>
    );
}
export default MainContent;