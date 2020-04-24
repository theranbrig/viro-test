'use strict';

import { Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import {
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARScene,
  ViroAmbientLight,
  ViroAnimations,
  ViroBox,
  ViroButton,
  ViroConstants,
  ViroDirectionalLight,
  ViroMaterials,
  ViroNode,
  ViroOmniLight,
  ViroSphere,
  ViroSpotLight,
  ViroText,
} from 'react-viro';

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
          materials={['cowhide1']}
        /> */}
        <Viro3DObject
          source={require('./look6obj/march12_obj_look6_v5_simplified.obj')}
          resources={[require('./look6obj/march12_obj_look6_v5_simplified.mtl')]}
          position={[0, -1, -1]}
          scale={[0.0001, 0.0001, 0.0001]}
          type='OBJ'
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          onError={this._onError}
          materials={['silk1', 'buttonhole', 'silk2', 'cowhide1', 'material']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <ViroSpotLight
          ref={(component) => {
            this.spotLight = component;
          }}
          intensity={1000}
          innerAngle={5}
          outerAngle={20}
          attenuationStartDistance={0.1}
          attenuationEndDistance={22}
          direction={[0, -1, 0]}
          position={[0, 1, 0]}
          color='#ffffff'
          castsShadow={true}
          shadowNearZ={0.1}
          shadowOpacity={0.9}
        />
        <ViroOmniLight
          intensity={1000}
          position={[-5, 5, 1]}
          color={'#FFFFFF'}
          attenuationStartDistance={20}
          attenuationEndDistance={30}
        />
        {/* <ViroOmniLight
            intensity={1000}
            position={[5, 5, 1]}
            color={'#FFFFFF'}
            attenuationStartDistance={20}
            attenuationEndDistance={30}
          />
          <ViroOmniLight
            intensity={1000}
            position={[-5, -5, 1]}
            color={'#FFFFFF'}
            attenuationStartDistance={20}
            attenuationEndDistance={30}
          />
          <ViroOmniLight
            intensity={1000}
            position={[5, -5, 1]}
            color={'#FFFFFF'}
            attenuationStartDistance={20}
            attenuationEndDistance={30}
          /> */}

        <ViroAmbientLight color='#FFFFFF' />
        <ViroBox
          position={[0, 0, -1.5]}
          scale={[0.3, 0.3, 0.1]}
          materials={['cowhide1']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <ViroBox
          position={[0, 0.5, -1]}
          scale={[0.3, 0.3, 0.1]}
          materials={['cowhide1']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <ViroSphere
          heightSegmentCount={20}
          widthSegmentCount={20}
          radius={2}
          scale={[0.1, 0.1, 0.1]}
          position={[0, -0.5, -2]}
          materials={['cowhide1']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        {this.props.showText && (
          <ViroText
            text={this.state.text}
            scale={[0.1, 0.1, 0.1]}
            position={[0, , -1]}
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
  //    Primitive count for material 0: 37452"
  //    Lambert material"
  //       Opacity set to 1.000000"
  //       Texture index 0, texture type [DiffuseColor], texture name [silk1.jpg]"
  //    Primitive count for material 1: 136"
  //    Lambert material"
  //       Opacity set to 1.000000"
  //       Texture index 0, texture type [DiffuseColor], texture name [buttonhole.jpg]"
  //       Texture index 4, texture type [AmbientColor], texture name [2.3cm_Edit.jpg]"
  //    Primitive count for material 2: 3750"
  //    Phong material"
  //       Opacity set to 0.758100"
  //       Texture index 0, texture type [DiffuseColor], texture name [silk2.jpg]"
  //       Texture index 4, texture type [AmbientColor], texture name [FCL1-PSS003-00_DIFFUSE_redred.jpg]"
  //       Texture index 9, texture type [NormalMap], texture name [FCL1-PSS003-00_NORMAL.png]"
  //    Primitive count for material 3: 111610"
  //    Phong material"
  //       Opacity set to 1.000000"
  //       Texture index 0, texture type [DiffuseColor], texture name [cowhide1.jpg]"
  //       Texture index 4, texture type [AmbientColor], texture name [FCL2-PSL002-00_brownbaby.jpg]"
  //    Primitive count for material 4: 17844"
  //    Lambert material"
  //       Opacity set to 1.000000"
  silk1: {
    lightingModel: 'Lambert',
    diffuseTexture: require('./look6obj/silk1.jpg'),
  },
  buttonhole: {
    lightingModel: 'Phong',
    shininess: 5.0,
    diffuseTexture: require('./look6obj/buttonhole.jpg'),
    specularTexture: require('./look6obj/2.3cm_Edit.png'),
  },
  silk2: {
    lightingModel: 'Phong',
    shininess: 4.0,
    diffuseTexture: require('./look6obj/silk2.jpg'),
    specularTexture: require('./look6obj/FCL1-PSS003-00_DIFFUSE_redred.jpg'),
  },
  cowhide1: {
    lightingModel: 'Phong',
    shininess: 20.0,
    diffuseTexture: require('./look6obj/FCL2-PSL002-00_brownbaby.jpg'),
    // specularTexture: require('./look6obj/FCL2-PSL002-00_brownbaby.jpg'),
    specularTexture: require('./look6obj/FCL2-PSL002-00.png'),
  },
  material: {
    diffuseColor: '#634322',
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 2500, //.25 seconds
  },
});

module.exports = HelloWorldSceneAR;
