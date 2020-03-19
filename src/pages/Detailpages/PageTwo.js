import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LayoutPadrao from '../components/LayoutPadrao';

const video = "https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/X4W11rnR-medium.mp4"

export default class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTitle: 'Page 3',
            txt: 'Next Page',
            page: 'PageThree'
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