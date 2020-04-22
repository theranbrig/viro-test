'use strict';

import React, { Component } from 'react';
import {
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARScene,
  ViroAmbientLight,
  ViroBox,
  ViroConstants,
  ViroMaterials,
  ViroNode,
  ViroSpotLight,
  ViroOmniLight,
  ViroText,
  ViroButton,
  ViroDirectionalLight,
} from 'react-viro';

import { StyleSheet, Button } from 'react-native';

export default class HelloWorldSceneAR extends Component {
  constructor(props) {
    super(props);

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);
    this._onError = this._onError.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroNode position={[0, 0, -1]} dragType='FixedToWorld' onDrag={() => {}}>
          {/* <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[
              require('./res/emoji_smile/emoji_smile_diffuse.png'),
              require('./res/emoji_smile/emoji_smile_normal.png'),
              require('./res/emoji_smile/emoji_smile_specular.png'),
            ]}
            position={[0, 0.5, 0]}
            scale={[0.2, 0.2, 0.2]}
            type='VRX'
          /> */}
          <Viro3DObject
            source={require('./look6/march12_fbx_look6_v5.vrx')}
            position={[0, -1, -1]}
            scale={[0.0006, 0.0006, 0.0006]}
            type='VRX'
            onLoadStart={this._onLoadStart}
            onLoadEnd={this._onLoadEnd}
            onError={this._onError}
            materials={[
              'Silk_Duchess_Satin_FCL1PSS003_FRONT_333737',
              'Cowhide_Leather_FCL2PSL002_FRONT_1033776',
            ]}
          />
          <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0, -1, -0.2]}
            position={[0, 3, 1]}
            color='#ffffff'
            castsShadow={true}
          />
          <ViroDirectionalLight
            castsShadow={true}
            color='#ffffff'
            direction={[0, -1, 0]}
            notes='From Top'
          />
          <ViroDirectionalLight
            castsShadow={true}
            color='#ffffff'
            direction={[-1, 0, 0]}
            notes='From Right'
          />
          <ViroDirectionalLight
            castsShadow={true}
            color='#ffffff'
            direction={[1, 0, 0]}
            notes='From Left'
          />
          <ViroDirectionalLight
            castsShadow={true}
            color='#ffffff'
            direction={[0, 0, -1]}
            notes='From Front'
          />
          {/* <ViroSpotLight
            position={[0, 1, 0]}
            color='#ffffff'
            direction={[0, 0, -1]}
            attenuationStartDistance={5}
            attenuationEndDistance={10}
            innerAngle={5}
            outerAngle={50}
          />
          <ViroSpotLight
            position={[-1, -1, 0]}
            color='#ffffff'
            direction={[0, 0, -1]}
            attenuationStartDistance={5}
            attenuationEndDistance={10}
            innerAngle={5}
            outerAngle={50}
          />
          <ViroSpotLight
            position={[1, 1, 0]}
            color='#ffffff'
            direction={[0, 0, -1]}
            attenuationStartDistance={5}
            attenuationEndDistance={10}
            innerAngle={5}
            outerAngle={50}
          /> */}
        </ViroNode>
        {/* <ViroAmbientLight color='#ffffff' /> */}
        {/* <ViroBox position={[0, -0.5, -1]} scale={[0.3, 0.3, 0.1]} materials={['grid']} /> */}
        {this.props.showText && (
          <ViroText
            text={this.state.text}
            scale={[0.1, 0.1, 0.1]}
            position={[0, 0, -1]}
            style={styles.helloWorldTextStyle}
          />
        )}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  _onLoadStart() {
    console.log('OBJ loading has started');
  }
  _onLoadEnd() {
    console.log('OBJ loading has finished');
  }
  _onError(event) {
    console.log('OBJ loading failed with error: ' + event.nativeEvent.error);
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    color: 'red',
  },
});

ViroMaterials.createMaterials({
  // grid: {
  //   diffuseTexture: require('./res/grid_bg.jpg'),
  // },
  Silk_Duchess_Satin_FCL1PSS003_FRONT_333737: {
    lightingModel: 'PBR',
    shininess: 1.0,
    specularTexture: require('./look6/FCL1-PSS003-00_DIFFUSE_redred.jpg'),
    diffuseTexture: require('./look6/FCL1-PSS003-00_DIFFUSE.jpg'),
  },

  Cowhide_Leather_FCL2PSL002_FRONT_1033776: {
    lightingModel: 'PBR',
    shininess: 1.0,
    diffuseTexture: require('./look6/FCL2-PSL002-00.png'),
    specularTexture: require('./look6/FCL2-PSL002-00_brownbaby.jpg'),
  },
  // Name: Silk_Duchess_Satin_FCL1PSS003_FRONT_333737
  // NO SHINE
  // Name: Silk_Duchess_Satin_FCL1PSS003 opaque_FRONT_922081
  // TRANSPARENCY - 59%
  // REFLECTANCE (SPECULAR) - WIDTH 51%, SPECULAR STRENGTH 7.5%
  // ENVIRONMENT - 100%
  // NORMAL - 100%
  // Name: Cowhide_Leather_FCL2PSL002_FRONT_1033776
  // REFLECTANCE (SPECULAR) - WIDTH 30%, SPECULAR STRENGTH 31.2%
  // ENVIRONMENT - 100%
  // Name: Material3579
  // NO SHINE
  // Name: PT_FABRIC_FRONT_3586
  // ENVIRONMENT - 100%
});

module.exports = HelloWorldSceneAR;
