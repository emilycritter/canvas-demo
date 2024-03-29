document.addEventListener("DOMContentLoaded", function(){
  // Set the scene size.
  const WIDTH = 400;
  const HEIGHT = 300;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  // Get the DOM element to attach to
  const container = document.querySelector('#container');

  // Create a WebGL renderer, camera, and a scene
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
  );

  const scene = new THREE.Scene();

  // Add the camera to the scene.
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

  // Attach the renderer-supplied DOM element.
  container.appendChild(renderer.domElement);

  // Set up the sphere vars
  const RADIUS = 50;
  const SEGMENTS = 16;
  const RINGS = 16;

  // Create the sphere's sphere
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color:  0xCC0000
  });

  // Create a new mesh with sphere geometry
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
      RADIUS,
      SEGMENTS,
      RINGS
    ),
    sphereMaterial
  );

  // Move the Sphere back in Z so we can see it
  sphere.position.z = -300;

  // Add the sphere to the scene
  scene.add(sphere);

  // Create a point light
  const pointLight = new THREE.PointLight(0xFFFFFF);

  // Set the light position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // Add the light to the scene
  scene.add(pointLight);

  function update () {
    // Draw!
    renderer.render(scene, camera);

    // Schedule the next frame.
    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);
});
