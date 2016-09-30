/**
 * Created by lucien on 16/9/24.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    ListView
} from  'react-native';


import Cell from './Cell';

import Api from '../Api';

import DetailView from '../Detail/DetailView';


class HomeView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isFirst: false,
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        };
    }

    render() {

        if (!this.state.isFirst) {
            return (
                <Text style={{marginTop: 80, textAlign: 'center'}}>正在刷新...</Text>
            )
        }

        return (
            <ListView
                style={{backgroundColor: 'rgb(236,236,236)', marginTop: 64}}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
            />
        )

    }

    //组件加载完成,从这里面下载数据
    componentDidMount() {

        this.getData();
    }


    getData() {

        console.log(Api.homePage);
        fetch(Api.homePage)
            .then((data) => data.json())
            .then((dataDic) => {
                console.log(dataDic);
                var dataArr = dataDic.data;
                if (dataArr) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(dataArr),
                        isFirst: true
                    });
                }
            }).done();


    }

    //自定义cell
    renderRow(rowData) {

        return (
            <Cell
                rowDic={rowData}
                selectedCell={(rowData) => this.selectedCell(rowData)}
            />
        )
    }
    //点击cell时触发的方法
    selectedCell(rowData) {

        console.log(rowData.id);

        this.props.navigator.push({
            title: rowData.title,
            component: DetailView,
            passProps: {
                cellID: rowData.id
            }

        });
    }

}

export default HomeView;





















