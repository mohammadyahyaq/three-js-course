import "./style.css";
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";

// Scene, Object, Camera, and Renderer

// create the scene
const scene = new Scene();

// create the mesh (object)
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: "purple" });
const mesh = new Mesh(geometry, material);
// add the mesh to the scene
scene.add(mesh);

// create the camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new PerspectiveCamera(75, aspect.width / aspect.height, 1, 2000);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// create renderer
const canvas = document.querySelector<HTMLDivElement>("#app")!;
const renderer = new WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
