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
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
      normal: true,
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
        <Viro3DObject
          source={require('./res/phongFBX/april27_fbx_look6_phong.vrx')}
          resources={[
            require('./res/phongFBX/april27_fbx_look6_phong.fbm/buttonhole.jpg'),
            require('./res/phongFBX/april27_fbx_look6_phong.fbm/cowhide1.jpg'),
            require('./res/phongFBX/april27_fbx_look6_phong.fbm/silk1.jpg'),
            require('./res/phongFBX/april27_fbx_look6_phong.fbm/silk2.jpg'),
          ]}
          position={[0, -0.5, -1]}
          scale={[0.001, 0.001, 0.001]}
          type='VRX'
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        {/* <Viro3DObject
          source={require('./look7/march12_fbx_look6_v6_simplified.vrx')}
          resources={[
            require('./look7/2.3cm_Edit.jpg'),
            require('./look7/2.3cm_Edit.png'),
            require('./look7/FCL1-PSS003-00_DIFFUSE_redred.jpg'),
            require('./look7/FCL1-PSS003-00_NORMAL.png'),
            require('./look7/FCL2-PSL002-00_brownbaby.jpg'),
            require('./look7/silk1.jpg'),
            require('./look7/silk1Diffuse.jpg'),
            require('./look7/silk2.jpg'),
            require('./look7/cowhide1.jpg'),
            require('./look7/cowhide1Diffuse.png'),
          ]}
          position={[0.1, 0.1, 0.1]}
          scale={[0.001, 0.001, 0.001]}
          type='VRX'
          materials={['silk1', 'buttonhole', 'silk2', 'cowhide1', 'material']}
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          onError={this._onError}
          animation={{ name: 'rotate', run: true, loop: true }}
        /> */}
        <Viro3DObject
          source={require('./res/test_spheres_theran/sphere_cgx_metal.obj')}
          resources={[require('./res/test_spheres_theran/sphere_cgx_metal.mtl')]}
          position={[0, 0.75, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='OBJ'
          materials={['pbr']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/test_spheres_theran/sphere_lambertian_diffuse.obj')}
          resources={[require('./res/test_spheres_theran/sphere_lambertian_diffuse.mtl')]}
          position={[0, 0.5, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='OBJ'
          materials={['constant']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/test_spheres_theran/sphere_lambertian_metal.obj')}
          resources={[require('./res/test_spheres_theran/sphere_lambertian_metal.mtl')]}
          position={[0, 0.25, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='OBJ'
          materials={['lambert']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/test_spheres_theran/sphere_phong_metal.obj')}
          resources={[require('./res/test_spheres_theran/sphere_phong_metal.mtl')]}
          position={[0, 0, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='OBJ'
          materials={['phong']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/brick_spheres/brick_sphere_cgx_metal.vrx')}
          resources={[require('./res/brick_spheres/brick_sphere_cgx_metal.fbm/brick_tex.jpg')]}
          position={[0.5, 0.75, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='VRX'
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/brick_spheres/brick_sphere_lambertian_diffuse.vrx')}
          resources={[
            require('./res/brick_spheres/brick_sphere_lambertian_diffuse.fbm/brick_tex.jpg'),
          ]}
          position={[0.5, 0.25, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='VRX'
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/brick_spheres/brick_sphere_lambertian_metal.vrx')}
          resources={[
            require('./res/brick_spheres/brick_sphere_lambertian_metal.fbm/brick_tex.jpg'),
          ]}
          position={[0.5, 0.5, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='VRX'
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        <Viro3DObject
          source={require('./res/brick_spheres/brick_sphere_phong_metal.vrx')}
          resources={[require('./res/brick_spheres/brick_sphere_phong_metal.fbm/brick_tex.jpg')]}
          position={[0.5, 0.0, -1]}
          scale={[0.01, 0.01, 0.01]}
          type='VRX'
          animation={{ name: 'rotate', run: true, loop: true }}
        />
        {/* <Viro3DObject
          source={require('./look6obj/april24_obj_v1.obj')}
          resources={[require('./look6obj/april24_obj_v1.mtl')]}
          position={[0, -1, -1]}
          scale={[0.000075, 0.000075, 0.000075]}
          type='OBJ'
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          onError={this._onError}
          materials={['silk1', 'buttonhole', 'silk2', 'cowhide1', 'material']}
          animation={{ name: 'rotate', run: true, loop: true }}
        /> */}
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
        <ViroOmniLight
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
        />

        <ViroAmbientLight color='#FFFFFF' />
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
    // Changes state of model for test
    console.log('OBJ loading has finished');
    setTimeout(() => {
      this.setState({ normal: false });
    }, 5000);
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
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
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
    shininess: 200.0,
    diffuseTexture: require('./look6obj/cowhide1.jpg'),
    specularTexture: require('./look6obj/FCL2-PSL002-00.png'),
  },
  material: {
    diffuseColor: '#634322',
  },
  lambert: {
    lightingModel: 'Lambert',

    diffuseTexture: require('./res/brick_spheres/brick_sphere_cgx_metal.fbm/brick_tex.jpg'),
  },
  phong: {
    lightingModel: 'Phong',

    diffuseTexture: require('./res/brick_spheres/brick_sphere_cgx_metal.fbm/brick_tex.jpg'),
  },
  pbr: {
    lightingModel: 'PBR',

    diffuseTexture: require('./res/brick_spheres/brick_sphere_cgx_metal.fbm/brick_tex.jpg'),
  },
  constant: {
    lightingModel: 'Constant',

    diffuseTexture: require('./res/brick_spheres/brick_sphere_cgx_metal.fbm/brick_tex.jpg'),
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
