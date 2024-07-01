let articles = [
 { id: 1, country: 'España', slogan: 'Viva España' },
 { id: 2, country: 'Italia', slogan: 'Azzurri' },
 { id: 3, country: 'Francia', slogan: 'Allez les blues' },
 { id: 4, country: 'Alemania', slogan: 'über alles' },
 { id: 5, country: 'Portugal', slogan: 'As armas' }
];

articles.forEach(article => {
 console.log(`ID: ${article.id}, País: ${article.country}, Eslogan: ${article.slogan}`);
});