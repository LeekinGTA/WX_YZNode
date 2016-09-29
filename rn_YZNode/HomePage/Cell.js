/**
 * Created by lucien on 16/9/24.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Cell extends Component {

    render() {

        return (
            <View style={{backgroundColor: 'white',height: 60,marginTop: 15}}>
                <Text style={{
                    fontSize:16,
                    color: 'rgb(83,83,83)',
                    flex: 1,
                    marginLeft: 5
                }}>{this.props.rowDic.title}</Text>
                <View style={{
                    flexDirection: 'row',
                    height: 25,
                    backgroundColor: 'white',
                    alignItems: 'center'}}>
                    <Text style={[styles.base, {color: 'rgb(169,212,99)'}]}>{this.props.rowDic.tab}</Text>
                    <Text style={[styles.base, {color: 'rgb(142,142,142)'}]}>
                        {this.props.rowDic.author.loginname}|{this.props.rowDic.reply_count}回复|{this.props.rowDic.visit_count}阅读
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    base: {
        fontSize: 12,
        margin: 5
    }
});




export default Cell;