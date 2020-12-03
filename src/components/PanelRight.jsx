import React from 'react';
import { Panel, View, Page, Navbar, Block } from 'framework7-react';

export default ({ onGoToAbout, onGoToForm, onClosePanelRight }) => (
    <Panel right reveal themeDark onPanelBackdropClick={onClosePanelRight}>
        <View>
            <Page>
                <Navbar title="Right Panel" />
                <Block>Right panel content goes here</Block>
            </Page>
        </View>
    </Panel>
);