import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {

    state = {
        value: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            value: "",
            isEmpty: true,
        })
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false,
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: true,
            })
        }
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas!</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                {/* za pomoca Prompt blokujemy, ze jesli nastepuje zmiana sciezki to wyswietla sie alert czy aby na pewno tego chcemy */}
                <Prompt
                    // to samo co when={this.state.value !== ""}
                    // when={this.state.value}
                    when={this.state.isEmpty === false}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
                />
            </div>
        );
    }
}

export default ContactPage;