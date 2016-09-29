/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';


import HomeView from './HomePage/HomeView';

class YZNode extends Component {

    render() {
        return (
            <NavigatorIOS
                style={{flex: 1}}
                initialRoute={{
                    title: 'YZMobileTalks',
                    component: HomeView
                }}
            />
        )
    }
}

AppRegistry.registerComponent('YZNodeForReactNative', () => YZNode);
