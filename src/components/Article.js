import React from 'react';

const Article = (props) => {

    // powinnismy stylowac w osobnym dokumencie css ale w ramach cwiczen zrobimy to tutaj
    const styles = {
        marginTop: "40px",

    }
    return (
        <article key={props.key} style={styles}>
            <h3 style={{
                marginBottom: "3px",
                textTransform: "uppercase"
            }}>{props.title}</h3>
            <span style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "12px",
            }}>{props.author}</span>
            <p style={{ fontSize: "15px" }}>{props.text}</p>
        </article>
    );
}

export default Article;