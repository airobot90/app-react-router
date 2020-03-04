import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria stron?",
        author: "Jan Nowak",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni harum qui perferendis molestiae necessitatibus! Inventore voluptatibus aliquid, quam ducimus corrupti temporibus modi quae assumenda eos iure veritatis. Quidem, omnis consequatur?"
    },

    {
        id: 2,
        title: "Czym jest paradoks Fermiego?",
        author: "Pola Noakowska",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni harum qui perferendis molestiae necessitatibus! Inventore voluptatibus aliquid, quam ducimus corrupti temporibus modi quae assumenda eos iure veritatis. Quidem, omnis consequatur?"
    },

    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Paweł Jankowski",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni harum qui perferendis molestiae necessitatibus! Inventore voluptatibus aliquid, quam ducimus corrupti temporibus modi quae assumenda eos iure veritatis. Quidem, omnis consequatur?"
    },
]

const HomePage = () => {

    const articleList = articles.map(article => (
        <Article key={article.id} {...article} />
    ));
    return (

        <div className="home">
            {articleList}
        </div>
    );
}

export default HomePage;