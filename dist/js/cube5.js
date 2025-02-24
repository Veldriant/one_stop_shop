
const wrapper = document.getElementById('cube');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35, wrapper.offsetWidth / wrapper.offsetHeight,
  1, 1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(wrapper.offsetWidth, wrapper.offsetHeight);
renderer.setClearColor( 0xffffff, 0);
wrapper.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
// camera.position.set( 5, -3, 8 );
if($(window).width() > 576) {
  camera.position.set( 5, -3, 10 );
} else {
  camera.position.set( 5, -3, 15 );
}
camera.lookAt(scene.position);
controls.enableZoom = false;
controls.enablePan = false;
const pointLight = new THREE.PointLight(0xffffff, 0.15, 400, 2);
pointLight.position.set(3, 3, 3);
const lightHolder = new THREE.Group();
pointLight.castShadow = true;
lightHolder.add(pointLight);
scene.add(lightHolder);
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const quaternion = new THREE.Quaternion();
const target = new THREE.Vector3();
scene.add(new THREE.AmbientLight(0xffffff, 0.95));


window.addEventListener( 'resize', onWindowResize, false ); 
function onWindowResize() {
  camera.aspect = wrapper.offsetWidth / wrapper.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( wrapper.offsetWidth, wrapper.offsetHeight );
};

const lang = $(wrapper).attr('data-lang');

let myText1, myText2, myText3, button;

if(lang === 'en') {/*
  myText1 = new SpriteText('Lead Generation →', '0.3', '#cf093c');
  myText2 = new SpriteText('Media Buying →', '0.3', '#cf093c');
  myText3 = new SpriteText('Content manegement →', '0.3', '#cf093c');*/

  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube5/eng/Lead_Generation_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube5/eng/Media_Buying_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube5/eng/Content_manegement_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('START TODAY', '0.28', '#cf093c');
}

if(lang === 'ru') {
  // myText1 = new SpriteText('Лидогенерация →', '0.3', '#cf093c'); 
  // myText2 = new SpriteText('Покупка рекламы →', '0.3', '#cf093c');
  // myText3 = new SpriteText('Управление контентом →', '0.3', '#cf093c');

  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ru/Lead_Generation_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ru/Media_Buying_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ru/Content_manegement_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('НАЧНИТЕ СЕЙЧАС', '0.25', '#cf093c');
}

if(lang === 'ar') {
  // myText1 = new SpriteText(
  //   'قيادة الجيل →', 
  //   '0.3', 
  //   '#cf093c'); 
  // myText2 = new SpriteText(
  //   'شراء وسائل الإعلام →',
  //  '0.3', '#cf093c');
  // myText3 = new SpriteText(
  //   'ادارة المحتوى →', 
  //   '0.3', 
  //   '#cf093c');

  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ar/Lead_Generation_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ar/Media_Buying_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube5/ar/Content_manegement_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText(
    'إبدأ اليوم', 
    '0.25', 
    '#cf093c');
}

if(lang === 'es') {
  // myText1 = new SpriteText('Лидогенерация →', '0.3', '#cf093c'); 
  // myText2 = new SpriteText('Покупка рекламы →', '0.3', '#cf093c');
  // myText3 = new SpriteText('Управление контентом →', '0.3', '#cf093c');

  const text1BorderLoader = new THREE.TextureLoader().load( '../img/cube5/es/Lead_Generation_link.png' );
  const text1Border = new THREE.SpriteMaterial({map: text1BorderLoader});
  myText1 = new THREE.Sprite(text1Border);
  // myText1 = new SpriteText('Accounts →', '0.23', '#1e4ea7');
  const text2BorderLoader = new THREE.TextureLoader().load( '../img/cube5/es/Media_Buying_link.png' );
  const text2Border = new THREE.SpriteMaterial({map: text2BorderLoader});
  myText2 = new THREE.Sprite(text2Border);
  // myText2 = new SpriteText('Licenses →', '0.23', '#1e4ea7');
  const text3BorderLoader = new THREE.TextureLoader().load( '../img/cube5/es/Content_manegement_link.png' );
  const text3Border = new THREE.SpriteMaterial({map: text3BorderLoader});
  myText3 = new THREE.Sprite(text3Border);

  button = new SpriteText('COMIENCE HOY', '0.25', '#cf093c');
}

// const myText1 = new SpriteText('Lead Generation →', '0.3', '#cf093c');
// myText1.strokeWidth = 0.15;
// myText1.strokeColor = '#cf093c';
myText1.name = 'link1';
myText1.position.x = 0;
myText1.position.y = 0.7;
myText1.position.z = 0;
// myText1.scale.set(2, 0.75, 1.5);

// const myText2 = new SpriteText('Media Buying →', '0.3', '#cf093c');
// myText2.strokeColor = '#cf093c';
// myText2.strokeWidth = 0.15;
myText2.name = 'link2';
myText2.position.x = -0.5;
myText2.position.y = 0.5;
myText2.position.z = 1.5;
// myText2.scale.set(2, 0.75, 1.5)

// const myText3 = new SpriteText('Content manegement →', '0.3', '#cf093c');
// myText3.strokeColor = '#cf093c';
// myText3.strokeWidth = 0.15;
myText3.name = 'link3';
myText3.position.x = -1;
myText3.position.y = -1;
myText3.position.z = 1;
// myText3.scale.set(2, 0.75, 1.5)

// const button = new SpriteText('START TODAY', '0.28', '#cf093c');
button.strokeColor = '#cf093c';
button.strokeWidth = 0.2;
button.position.x = 1.5;
button.position.y = 0;
button.position.z = 0;
button.name = 'button';

if(lang === 'en') {
  myText1.scale.set(2.7, 0.75, 1.5);
  myText2.scale.set(2.4, 0.75, 1.5);
  myText3.scale.set(3, 0.75, 1.5);
}
if(lang === 'ru') {
  myText1.scale.set(2.5, 0.75, 1.5);
  myText2.scale.set(2.7, 0.75, 1.5);
  myText3.scale.set(2.9, 0.75, 1.5);
}
if(lang === 'ar') {
  myText1.scale.set(2, 0.75, 1.5);
  myText2.scale.set(2.5, 0.75, 1.5);
  myText3.scale.set(2.3, 0.75, 1.5);
}
if(lang === 'es') {
  myText1.scale.set(3.5, 0.75, 1.5);
  myText2.scale.set(2.5, 0.75, 1.5);
  myText3.scale.set(3, 0.75, 1.5);
}

const map = new THREE.TextureLoader().load( '../img/border4.png' );
const border = new THREE.SpriteMaterial({map: map, sizeAttenuation: true});

const borderSprite = new THREE.Sprite(border);
borderSprite.name = 'link4';
borderSprite.position.x = 1.5;
borderSprite.position.y = 0;
borderSprite.position.z = 0;
borderSprite.scale.set(2.5, 0.75, 1.0);

// Cubes
const geometry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0xdbdbdb});

const cubes = [];

for(i=0; i<27; i++) {
  cubes.push(new THREE.Mesh(geometry, material));
}

const loader = new THREE.TextureLoader();

// cube21
loader.load('../img/cube5/accept.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material21 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
    ];
    const cube21 = new THREE.Mesh(geometry, material21);
    cube21.position.set(-1.1, 1.1, -1.1);
    cube21.name = 'cube21';
    scene.add(cube21);
  }
);

// cube12
loader.load('../img/cube5/mission.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material12 = [ 
      new THREE.MeshPhongMaterial({color:0x7f619c, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7f619c, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: loader.load('../img/cube5/money.png')}),
      new THREE.MeshPhongMaterial({color:0x4a6493, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0xd6c270, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube12 = new THREE.Mesh(geometry, material12);
    cube12.position.set(-1.1, 1.1, 1.1);
    cube12.name = 'cube12';
    scene.add(cube12);
    cube12.add(myText1);
  }
);
// cube9
loader.load('../img/cube5/ecommerce.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material9 = [ 
      new THREE.MeshPhongMaterial({color:0x7f619c, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x7f619c, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0x85435f, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0xb74563, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube9 = new THREE.Mesh(geometry, material9);
    cube9.position.set(0, 0, 1.1);
    cube9.name = 'cube9';
    scene.add(cube9);
    cube9.add(myText2);
  }
);
// cube13
loader.load('../img/cube5/chart.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material13 = [ 
      new THREE.MeshPhongMaterial({map: loader.load('../img/cube5/law.png')}),
      new THREE.MeshPhongMaterial({color:0x7a9c16, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xd1ae1a, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xd1ae1a, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}), 
      new THREE.MeshPhongMaterial({color:0xb71e45, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube13 = new THREE.Mesh(geometry, material13);
    cube13.position.set(1.1, -1.1, 1.1);
    cube13.name = 'cube13';
    scene.add(cube13);
    cube13.add(myText3);
  }
);
// cube26
loader.load('../img/cube2/location.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material26 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
    ];
    const cube26 = new THREE.Mesh(geometry, material26);
    cube26.position.set(0, 1.1, -1.1);
    cube26.name = 'cube26';
    scene.add(cube26);
  }
);
// cube20
loader.load('../img/cube2/payment.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material20 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
    ];
    const cube20 = new THREE.Mesh(geometry, material20);
    cube20.position.set(-1.1, -1.1, -1.1);
    cube20.name = 'cube20';
    scene.add(cube20);
  }
);
// cube2
loader.load('../img/cube2/payment.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material2 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube2 = new THREE.Mesh(geometry, material2);
    cube2.position.set(-1.1, 0, 0);
    cube2.name = 'cube2';
    scene.add(cube2);
  }
);
// cube10
loader.load('../img/cube5/economy.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material10 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube10 = new THREE.Mesh(geometry, material10);
    cube10.position.set(1.1, 1.1, 1.1);
    cube10.name = 'cube10';
    scene.add(cube10);
  }
);
// cube5
loader.load('../img/cube5/ribbon.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material5 = [ 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
    ];
    const cube5 = new THREE.Mesh(geometry, material5);
    cube5.position.set(1.1, 1.1, 0);
    cube5.name = 'cube5';
    scene.add(cube5);
  }
);
// cube1
loader.load('../img/cube5/ethereum.png',
  function(texture) {
    texture.anisotropy = renderer.getMaxAnisotropy();
    const material1 = [ 
      new THREE.MeshPhongMaterial({map: texture}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}),
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
      new THREE.MeshPhongMaterial({color:0xdbdbdb, transparent:true, opacity:1, side: THREE.DoubleSide}), 
    ];
    const cube1 = new THREE.Mesh(geometry, material1);
    cube1.position.set(1.1, 0, 0);
    cube1.name = 'cube1';
    scene.add(cube1);
  }
);


cubes.forEach((cube, i)=> {
  if(i != 12 && i != 26 && i != 20 && i != 2 && i != 13 && i != 9 && i != 21 && i != 10 && i != 5 && i != 1) {
    cube.name = `cube${i}`;
    scene.add(cube);
  }
  switch(i) {
    case 3:
      cube.position.set(0, 1.1, 0);
      break;
    case 4:
      cube.position.set(0, -1.1, 0);
      break;
    case 6:
      cube.position.set(-1.1, -1.1, 0);
      break;
    case 7:
      cube.position.set(-1.1, 1.1, 0);
      break;
    case 8:
      cube.position.set(1.1, -1.1, 0);
      break;
    case 11:
      cube.position.set(-1.1, -1.1, 1.1);
      break;
    case 14:
      cube.position.set(0, -1.1, 1.1);
      break;
    case 15:
      cube.position.set(1.1, 0, 1.1);
      break;
    case 16:
      cube.position.set(-1.1, 0, 1.1);
      break;
    case 17:
      cube.position.set(0, 1.1, 1.1);
      break;
    case 18:
      cube.position.set(0, 0, -1.1);
      break;
    case 19:
      cube.position.set(1.1, 1.1, -1.1);
      break;
    case 22:
      cube.position.set(1.1, -1.1, -1.1);
      break;
    case 23:
      cube.position.set(0, -1.1, -1.1);
      break;
    case 24:
      cube.position.set(1.1, 0, -1.1);
      cube.add(button);
      cube.add(borderSprite);
      break;
    case 25:
      cube.position.set(-1.1, 0, -1.1);
      break;
  }
});

function findCubes(cubesNames, name) {
  let rotationGroup = new THREE.Group();
  rotationGroup.name = name;
  const sceneCubes = scene.children.filter(cube => cube.name.includes('cube'));
  const sceneGroups = scene.children.filter(cube => cube.name.includes('group'));
  sceneCubes.forEach(el => {
    if(cubesNames.includes(el.name)) {
      rotationGroup.add(el)
    }
  });
  if(sceneGroups.length) {
    sceneGroups.forEach(group => {
      group.children.forEach(el => {
        if(cubesNames.includes(el.name)) {
          rotationGroup.add(el)
        }
      })
    });
  }
  scene.add(rotationGroup)
};


function animation1() {
  // controls.enableDamping = false;
  findCubes(['cube10', 'cube15', 'cube24', 'cube8', 'cube1', 'cube5', 'cube13', 'cube19', 'cube22'], 'group1');
  let group = scene.children.filter(el => el.name === 'group1');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);

        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation2()
    })
    .start()
}
function animation2() {
  findCubes(['cube3', 'cube7', 'cube13', 'cube17', 'cube21', 'cube12', 'cube15', 'cube26', 'cube10'], 'group2');
  let group = scene.children.filter(el => el.name === 'group2');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.y = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation3()
    })
    .start()
}
function animation3() {
  findCubes(['cube3', 'cube4', 'cube7', 'cube9', 'cube18', 'cube23', 'cube14', 'cube0', 'cube15'], 'group3');
  let group = scene.children.filter(el => el.name === 'group3');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation4()
    })
    .start()
}
function animation4() {
  findCubes(['cube0', 'cube1', 'cube3', 'cube4', 'cube5', 'cube16', 'cube25', 'cube2', 'cube8'], 'group4');
  let group = scene.children.filter(el => el.name === 'group4');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation5();
    })
    .start()
}
function animation5() {
  findCubes(['cube0', 'cube1', 'cube7', 'cube9', 'cube18', 'cube23', 'cube2', 'cube15', 'cube14'], 'group5');
  let group = scene.children.filter(el => el.name === 'group5');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation6();
    })
    .start()
}
function animation6() {
  findCubes(['cube12', 'cube24', 'cube4', 'cube5', 'cube13', 'cube17', 'cube19', 'cube22', 'cube25'], 'group6');
  let group = scene.children.filter(el => el.name === 'group6');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation7();
    })
    .start()
}
function animation7() {
  findCubes(['cube0', 'cube1', 'cube7', 'cube9', 'cube18', 'cube23', 'cube2', 'cube15', 'cube14'], 'group7');
  let group = scene.children.filter(el => el.name === 'group7');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation8();
    })
    .start()
}
function animation8() {
  findCubes(['cube12', 'cube24', 'cube4', 'cube5', 'cube13', 'cube17', 'cube19', 'cube22', 'cube25'], 'group8');
  let group = scene.children.filter(el => el.name === 'group8');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation9();
    })
    .start()
}
function animation9() {
  findCubes(['cube0', 'cube1', 'cube3', 'cube4', 'cube5', 'cube16', 'cube25', 'cube2', 'cube8'], 'group9');
  let group = scene.children.filter(el => el.name === 'group9');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion)
        el.rotation.setFromQuaternion(quaternion)
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      animation10();
    })
    .start()
}
function animation10() {
  findCubes(['cube3', 'cube4', 'cube7', 'cube9', 'cube18', 'cube23', 'cube14', 'cube0', 'cube15'], 'group10');
  let group = scene.children.filter(el => el.name === 'group10');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}))
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.x = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation11();
    })
    .start()
}
function animation11() {
  findCubes(['cube3', 'cube7', 'cube13', 'cube17', 'cube21', 'cube12', 'cube15', 'cube26', 'cube10'], 'group11');
  let group = scene.children.filter(el => el.name === 'group11');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      y: -(Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);
        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        // group[0].children[0].rotation.y = pos[i].rotation;
        scene.add(group[0].children[0]);
      }
      animation12()
    })
    .start()
}
function animation12() {
  findCubes(['cube10', 'cube15', 'cube24', 'cube8', 'cube1', 'cube5', 'cube13', 'cube19', 'cube22'], 'group12');
  let group = scene.children.filter(el => el.name === 'group12');
  if(group.length > 1) {
    group = [group.pop()];
  }
  new TWEEN.Tween(group[0].rotation)
  .to({
      x: (Math.PI / 2)
    },2000)
    .onComplete(function() {
      const pos = []
      group[0].children.forEach(el => {
        el.getWorldQuaternion(quaternion);
        el.rotation.setFromQuaternion(quaternion);

        pos.push(Object.assign({}, el.getWorldPosition(target), {name: el.name}));
      })
      for(let i=0;i<9; i++) {
        group[0].children[0].position.x = pos[i].x;
        group[0].children[0].position.y = pos[i].y;
        group[0].children[0].position.z = pos[i].z;
        scene.add(group[0].children[0]);
      }
      controls.autoRotate = true;
      animation1();
    })
    .start()
}

setTimeout(() => {
  animation1()
}, 1000);



window.addEventListener( 'pointerdown', onMouseClick, false );

function onMouseClick(event) {
  const objects = scene.children.filter(obj => obj.name.includes('cube') || obj.name.includes('group'));
  // console.log("TCL: scene", link1.children[0].name)

  mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects, true);
  if (intersects.length > 0) {
    let targetLink = intersects[0].object.name;
    if(targetLink === 'link1') {
      $('html, body').animate({
        scrollTop: $('#marketing-1').offset().top
      }, 500);
    }
    if(targetLink === 'link2') {
      $('html, body').animate({
        scrollTop: $('#marketing-2').offset().top
      }, 500);
    }
    if(targetLink === 'link3') {
      $('html, body').animate({
        scrollTop: $('#marketing-2').offset().top
      }, 500);
    }
    if(targetLink === 'link4') {
      $('#form').modal('show');
    }
  }
}

window.addEventListener('mousemove', onMouseHover, false)

function onMouseHover(event){
  const objects = scene.children.filter(obj => obj.name.includes('cube') || obj.name.includes('group'));
  // console.log("TCL: scene", link1.children[0].name)

  mouse.x = ( ( event.clientX - renderer.domElement.getBoundingClientRect().left ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.getBoundingClientRect().top ) / renderer.domElement.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects, true);
  if (intersects.length > 0) {
    let targetLink = intersects[0].object.name;
    let linksArr = ["link1", "link2", "link3", "link4", "link5", "button"]
    if(linksArr.includes(targetLink)){
      $('html,body').css('cursor', 'pointer');
    }
    else{
      $('html,body').css('cursor', 'default');
    }
  }
  else{
    $('html,body').css('cursor', 'default');
  }
}


function animate() {
  requestAnimationFrame( animate );
  lightHolder.quaternion.copy(camera.quaternion);
  controls.update();
  renderer.render( scene, camera );
  TWEEN.update();
  
}

animate();