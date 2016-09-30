/**
 * Created by lucien on 16/9/25.
 */


import React, {Component} from 'react';

import  {
    View,
    Text,
    WebView
} from 'react-native';

import Api from '../Api';


class DetailView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoad: false
        };
      }

    render(){

        console.log(this.props.cellID);

        var html = "<html><body>" +"<h3>"+ this.state.title+"</h3>"+ "<p style='font-size: 18'>"+this.state.tab+ "|" + this.state.loginName+ "|"+ this.state.create_at +"</p>" +this.state.content + "</body></html>";
        var contentView = this.state.isLoad === false ?
            <Text style={{fontSize: 18, marginTop: 80, textAlign: 'center'}}>正在刷新...</Text>:
            <View style={{flex: 1, marginTop: 64, backgroundColor: 'yellow'}}>
                <WebView style={{flex: 1}}
                    source={{html: html}}
                />
            </View>;



        return (
            <View style={{flex: 1, backgroundColor: 'green'}}>
                {contentView}
            </View>
        )
    }

    componentDidMount() {
        this.getDetailViewData();
    }

    getDetailViewData() {
        var detailURL = Api.detail + this.props.cellID;
        console.log(detailURL);
        fetch(detailURL)
            .then((jsonStr) => jsonStr.json())
            .then((dataDic) => {
                var data = dataDic.data;
                this.setState({
                    isLoad: true,
                    tab: data.tab,
                    content: data.content,
                    title: data.title,
                    create_at: data.create_at,
                    loginName: data.author.loginname
                });

            }).done();

    }

}

export default DetailView;











