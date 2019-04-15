const journalEntries = [
    {
        title: "Test",
        mood: "meh",
        date: "15-Apr-2019",
        post: "this is a test",
    }
];

const makeJournalPost = (title, date, mood, post) => {
     return ` <div class="article">
       <article>
           <h1>${title}</h1>
           <h2>${date}</h2>
           <h3>${mood}</h3>
           <p>${post}</p>
       </article>
       </div>`
}

const renderJournal = document.querySelector("#journalEntries")

for (let i = 0; i < journalEntries.length; i++) {
    const entry = journalEntries[i];
    renderJournal.innerHTML += makeJournalPost(
        entry.title,
        entry.date,
        entry.mood,
        entry.post
    )
}