import React from 'react';
import { Popup, Page, Block, Navbar, Link, NavRight, View } from 'framework7-react';

export default ({ onClosePopup }) => (
    <Popup id="my-popup">
        <View>
            <Page>
                <Navbar title="Popup">
                    <NavRight>
                        <Link onClick={onClosePopup}>Close</Link>
                    </NavRight>
                </Navbar>
                <Block>
                    <p>Popup content goes here.</p>
                </Block>
            </Page>
        </View>
    </Popup>
);