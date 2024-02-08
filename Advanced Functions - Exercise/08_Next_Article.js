function displayArticles(articles) {
    let currentIndex = 0;

    function displayNextArticle() {
        if (currentIndex < articles.length) {
            const contentDiv = document.getElementById('content');
            const articleDiv = document.createElement('div');
            articleDiv.textContent = articles[currentIndex];
            contentDiv.appendChild(articleDiv);
            currentIndex++;
        }
    }

    return displayNextArticle;
}

// Example usage:
const articles = ['Article 1', 'Article 2', 'Article 3'];
const displayNextArticle = displayArticles(articles);

// Simulate button click to display articles sequentially
document.getElementById('button').addEventListener('click', displayNextArticle);
