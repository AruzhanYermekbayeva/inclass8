
const text = `Does she need to be an empathetic leader? Ask about that. Does she need to 
take your company public? Ask about that. If you're the candidate, talk about why
you took certain jobs. Explain why you left. Explain why you chose a certain
school. Share why you decided to go to grad school. Discuss why you took a year
off to backpack through Europe, and what you got out of the experience. What
are your biggest weaknesses? Every candidate knows how to answer this
question: Just pick a theoretical weakness and magically transform that flaw into
a strength in disguise! For example: "My biggest weakness is getting so absorbed
in my work that I lose all track of time. Every day I look up and realize everyone
has gone home! I know I should be more aware of the clock, but when I love what
I'm doing I just can't think of anything else." So your "biggest weakness" is that
you'll put in more hours than everyone else? Great. What are your biggest
strengths? I'm not sure why interviewers ask this question; your resume and
experience should make your strengths readily apparent! Even so, if you're asked,
provide a sharp, on-point answer. Be clear and precise! If you're a great problem
solver, don't just say that: Provide a few examples, pertinent to the opening,
that prove you're a great problem solver! If you're an emotionally intelligent
leader, don't just say that!`;
function processText() {
    const sentences = text.split('. ').map(sentence => sentence.trim() + '.');
    let wordCount = 0;
    const processedSentences = sentences.map(sentence => {
        const words = sentence.split(' ');
        wordCount += words.length;

        return words.map(word => {
            if (word.length > 8) {
                return `<span class="highlight">${word}</span>`;
            }
            return word.replace('?', '🤔').replace('!', '😲'); //
        }).join(' ');
    });
    document.getElementById('paragraph').innerHTML = processedSentences.join('<br>');
    document.getElementById('wordCount').innerText = `Word Count: ${wordCount}`;

    const sourceLink = document.getElementById('sourceLink');
    sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
    sourceLink.innerText = 'Source of Text';
}
processText();
