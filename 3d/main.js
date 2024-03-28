import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// To allow for the camera to move around the scene

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https:/cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const Scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let object;
let controls;
let objTorender = "eye";

const Loader = new GLTFLoader();

Loader.load(
  "models/$(objToRender/scene.gltf",

  function (gltf) {
    //If the file is loaded, add it to the-scene

    object = gitf.scene;

    scene.add(object);
  },

  function (xhr) {
    //mile it is loading, log the progress

    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    //If there is an error, log-15

    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DO
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model

cameraamera.position.z = objToRender = "dino" ? 25 : 500;

//Add Lights to the scene, so we can actually see the 30 model

const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)

topLight.position.set(500, 500, 500); //top-left-ish

toplight.castShadow = true;

scene.add(topLight);

const ambientLight = new THREE.AmbientLight(
  0x333333,
  (objToRender = "dino" ? 5 : 1)
);

scene.add(ambientLight);




function animate{
    requestAnimationFrame(animate);
    if(object && objTorender == 'eye'){
        object.rotation.y = -3 + mouseX/ window.innerWidth * 3;
        object.rotation.X = -1.2 +mouseX * 2.5/ window.innerHeight;
    }
    renderer.render(scene,camera);
}


 //Add a listener to the window, so we can resize the window and the camera

 window.addEventListener("resize", function () {



camera.aspect window.innerWidth/window.innerHeight;

camera.updateProjection Matrix();

renderer.setSize(window.innerWidth, window.innerHeight);

 });
 //Start the 30 rendering

 animate();
