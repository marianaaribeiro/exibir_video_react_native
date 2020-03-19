import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LayoutPadrao from '../components/LayoutPadrao';
import PageTwo from '../Detailpages/PageTwo';


const video = "https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/Rn8KKQBy-medium.mp4"

export default class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTitle: 'Page 1',
            txt: 'Next Page',
            page: 'PageTwo'

        };
    }

    goPage = () => {
        PageTwos = PageTwo
    }

    render() {
        return (
            <>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic">
                        <LayoutPadrao playVideo={video} title={this.state.txtTitle} txtButtom={this.state.txt} />
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

