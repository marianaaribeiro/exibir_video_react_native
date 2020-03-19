
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Slider, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class LayoutPadrao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0.1,
      paused: false,
      overlay: false,
    };
  }

  backward = () => {
    this.video.seek(this.state.currentTime - 5);
  };

  forward = () => {
    this.video.seek(this.state.currentTime + 5);
  };

  load = ({ duration }) => this.setState({ duration });
  progress = ({ currentTime }) => this.setState({ currentTime });

  onslide = slide => {
    this.video.seek(slide * this.state.duration);
  };

  render() {
    const { currentTime, duration, paused } = this.state
    return (
      <View style={styles.bodyLayout}>
        <Text style={styles.baseText}>{this.props.title}</Text>
        <View style={styles.containerVideo}>
          <Video
            paused={paused}
            source={{ uri: this.props.playVideo }}
            ref={(ref) => {
              this.video = ref
            }}
            onLoad={this.load}
            onProgress={this.progress}
            resizeMode='stretch'
            style={styles.backgroundVideo}
          />
        </View>
        <View style={styles.containerControls}>
          <Slider
            style={styles.containerSlide}
            maximumTrackTintColor='white'
            minimumTrackTintColor='white'
            thumbTintColor='white'
            value={currentTime / duration}
            onValueChange={this.onslide} />
        </View>
        <View style={styles.containerControls}>
          <View style={styles.viewIcon}>
            <Icon name='backward' style={styles.icon} onPress={this.backward} />
            <Icon name={paused ? 'play' : 'pause'} style={styles.icon} onPress={() => this.setState({ paused: !paused })} />
            <Icon name='forward' style={styles.icon} onPress={this.forward} />
          </View>
        </View>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.titleButtom}>{this.props.txtButtom}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    marginVertical: 5,
    color: '#000000',
  },
  titleButtom: {
    fontFamily: 'Roboto',
    fontSize: 15,
    marginVertical: 5,
    color: '#000000',
    textAlign: 'center',
    marginTop: '8%',
  },

  bodyLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    height: '100%',
  },
  containerVideo: {
    marginTop: 22,
    width: '80%',
    height: 290,
    backgroundColor: '#CCCCCC',
  },
  containerControls: {
    width: '80%',
    height: 39,
    backgroundColor: '#AAAAAA',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    width: '80%',
    height: 73,
    marginTop: 100,
    backgroundColor: '#CCCCCC',
    marginBottom: 100,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icon: {
    backgroundColor: '#AAAAAA',
    fontSize: 25,
  },
  viewIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerSlide: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});