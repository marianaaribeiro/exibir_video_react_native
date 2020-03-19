import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LayoutPadrao from '../components/LayoutPadrao';

const video = "https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/zB9GG6dV-medium.mp4"

export default class PageThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTitle: 'Page 3',
            txt: 'First Page',
            page: 'PageOne'
        };
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
