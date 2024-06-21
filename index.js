import * as THREE from 'three'; 
import{ OrbitControls } from 'three/addons/controls/OrbitControls.js'
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
camera.getWorldPosition.z = 5;
const renderer = new THREE.WebGLRenderer({antialias: True});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
const hemiLight = new THREE.HemisphereLight();
scene.add(hemiLight);

function animate() {
requestAnimationFrame(animate);

sphere.rotation.x += 0.001;
sphere.rotation.y += 0.002;
renderer.render(scene, camera);
}

animate();

function handleWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', handleWindowResize, false);