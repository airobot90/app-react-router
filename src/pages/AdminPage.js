import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// to tak prowizorycznie zrobione -> jak false to nie mamy dostepu do panelu admina i przekierowuje nas do tego, aby się zalogowac, a jak mamy dostep, czyli ustawiamy na true to wita nas w panelu admina
const permission = false;

const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? (<h3>Panel admina - dzień dobry</h3>) : (
                <Redirect to="/login" />
            )
        )} />

    );
}

export default AdminPage;