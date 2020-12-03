import React from 'react';
import { View, Page, LoginScreen, LoginScreenTitle, List, ListInput, Label, Input, ListButton, BlockFooter } from 'framework7-react';

export default ({ onUsernameUpdated, onPasswordUpdated, onLogin, username, password }) => (
    <LoginScreen id="my-login-screen">
        <View>
            <Page loginScreen>
                <LoginScreenTitle>Login</LoginScreenTitle>
                <List form>
                    <ListInput
                        type="text"
                        name="username"
                        placeholder="Your username"
                        value={username}
                        onChange={({ target }) => onUsernameUpdated(target.value)}
                    ></ListInput>
                    <ListInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your password"
                        onChange={({ target }) => onPasswordUpdated(target.value)}
                    ></ListInput>
                </List>
                <List>
                    <ListButton title="Sign In" onClick={onLogin} />
                    <BlockFooter>
                        Some text about login information.<br />Click "Sign In" to close Login Screen
                    </BlockFooter>
                </List>
            </Page>
        </View>
    </LoginScreen>
);