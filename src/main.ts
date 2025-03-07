import * as Three from 'three';

const scene = new Three.Scene();
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({ color: 'red' });
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

const sizes = { width: 800, height: 600 };
const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
scene.add(camera);

const canvas = document.querySelector('.canvas');

if (!canvas) {
  console.error('Canvas element not found!');
  throw new Error('Canvas element not found!');
}

const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

const xRange = document.querySelector('#x');
const yRange = document.querySelector('#y');
const zRange = document.querySelector('#z');

if (!xRange || !yRange || !zRange) {
  console.error('One or more range inputs not found!');
  throw new Error('Range inputs missing!');
}

xRange.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  camera.position.x = Number(target.value);
});

yRange.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  camera.position.y = Number(target.value);
});

zRange.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  camera.position.z = Number(target.value);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();