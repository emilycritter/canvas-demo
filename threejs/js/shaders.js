document.addEventListener('DOMContentLoaded', function(){
  // Vertex shader
  /**
  * Multiply each vertex by the
  * model-view matrix and the
  * projection matrix (both provided
  * by Three.js) to get a final
  * vertex position
  */
  void main() {
    gl_Position = projectionMatrix *
                  modelViewMatrix *
                  vec4(position,1.0);
  }

  // Fragment shader
  /**
  * Set the colour to a lovely pink.
  * Note that the color is a 4D Float
  * Vector, R,G,B and A and each part
  * runs from 0.0 to 1.0
  */
  void main() {
    gl_FragColor = vec4(1.0,  // R
                        0.0,  // G
                        1.0,  // B
                        1.0); // A
  }
});
