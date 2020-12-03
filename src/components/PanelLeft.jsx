import React from 'react';
import { Panel, View, Page, Navbar, Block } from 'framework7-react';

export default ({ onGoToAbout, onGoToForm, onClosePanelLeft }) => (
    <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
        <View>
            <Page>
                <Navbar title="Left Panel" />
                <Block>Left panel content goes here</Block>
            </Page>
        </View>
    </Panel>
);