document.addEventListener('DOMContentLoaded', function(){
  var WIDTH = 400,
      HEIGHT = 300;

  var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;

  var $container = $('#container');

  var renderer = new THREE.WebGLRenderer();
  var camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
  );

  var scene = new THREE.Scene();

  camera.position.z = 300;
  renderer.setSize(WIDTH, HEIGHT);
  $container.append(renderer.domElement);

  // create the sphere's material
  var $vShader = $('#vertexshader');
  var $fShader = $('#fragmentshader');
  var shaderMaterial = new THREE.ShaderMaterial({
    vertexShader:   $vShader.text(),
    fragmentShader: $fShader.text()
  });


  // create a new mesh with sphere geometry
  var radius = 50,
      segments = 16,
      rings = 16;
  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),
    shaderMaterial
  );

  scene.add(sphere);
  scene.add(camera);

  renderer.render(scene, camera);
});
