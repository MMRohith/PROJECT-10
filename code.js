var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["861ee8fd-908f-499e-99e4-7ec45db7ba63","096bc857-06e1-40eb-8dbe-85e46141e33d","efb7f74d-21e2-4ba8-93af-480e791cb188","063aea15-39a8-4089-8a29-89377a70aa54","40041c36-bf3d-465f-8f76-7100c953e831","41b87d93-31a1-41ef-a523-4c36660e8f3f","5153a7b5-92f2-44d0-9a7f-5cdba07eb9a9","ac86131e-754f-45cf-a0b1-d8d125610b16","4260134c-cdf4-41aa-9e94-ab18ea675d85","432e2dad-e1d7-44ad-a299-44f07ead9e38","f4dc3cbb-59af-4a97-bf98-f4b1d73b41b6","e339234b-069e-4951-8cde-72786d82f5c5","9a030b8d-5769-42ab-8ce6-67deaef50b0b","d9af1eb3-0fc8-403d-bbdc-5edacc6b8f3b"],"propsByKey":{"861ee8fd-908f-499e-99e4-7ec45db7ba63":{"name":"girl2","sourceUrl":null,"frameSize":{"x":123,"y":398},"frameCount":2,"looping":true,"frameDelay":12,"version":"qJC12I28YEKVDtgJ5h5zAvhZFlvTtQ5w","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":398},"rootRelativePath":"assets/861ee8fd-908f-499e-99e4-7ec45db7ba63.png"},"096bc857-06e1-40eb-8dbe-85e46141e33d":{"name":"girl","sourceUrl":"assets/api/v1/animation-library/gamelab/bIeXe8Cb5f3N4t58HKxubwOc9Syrp.jO/category_people/yellow_shirt_hand_behind.png","frameSize":{"x":123,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"bIeXe8Cb5f3N4t58HKxubwOc9Syrp.jO","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":123,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bIeXe8Cb5f3N4t58HKxubwOc9Syrp.jO/category_people/yellow_shirt_hand_behind.png"},"efb7f74d-21e2-4ba8-93af-480e791cb188":{"name":"girl3","sourceUrl":"assets/api/v1/animation-library/gamelab/ySH524F0rn7cc6rsGlF2kegRNxFZdM03/category_people/yellow_shirt_wave.png","frameSize":{"x":149,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"ySH524F0rn7cc6rsGlF2kegRNxFZdM03","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":149,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ySH524F0rn7cc6rsGlF2kegRNxFZdM03/category_people/yellow_shirt_wave.png"},"063aea15-39a8-4089-8a29-89377a70aa54":{"name":"bike","sourceUrl":"assets/api/v1/animation-library/gamelab/r8HTipU6_qbrtX029gf5VT.jfgiSz4HF/category_vehicles/motoside_07.png","frameSize":{"x":240,"y":171},"frameCount":1,"looping":true,"frameDelay":2,"version":"r8HTipU6_qbrtX029gf5VT.jfgiSz4HF","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":171},"rootRelativePath":"assets/api/v1/animation-library/gamelab/r8HTipU6_qbrtX029gf5VT.jfgiSz4HF/category_vehicles/motoside_07.png"},"40041c36-bf3d-465f-8f76-7100c953e831":{"name":"bg","sourceUrl":"assets/v3/animations/U9zPDscCJxXcBxpuJohieJ3KLyixZQrXbOMlM0F_Bhk/40041c36-bf3d-465f-8f76-7100c953e831.png","frameSize":{"x":494,"y":216},"frameCount":1,"looping":true,"frameDelay":4,"version":"O251SzFu.IjzeFGLUFlyO1n_yDn4mYmi","loadedFromSource":true,"saved":true,"sourceSize":{"x":494,"y":216},"rootRelativePath":"assets/v3/animations/U9zPDscCJxXcBxpuJohieJ3KLyixZQrXbOMlM0F_Bhk/40041c36-bf3d-465f-8f76-7100c953e831.png"},"41b87d93-31a1-41ef-a523-4c36660e8f3f":{"name":"car1","sourceUrl":null,"frameSize":{"x":496,"y":236},"frameCount":1,"looping":true,"frameDelay":12,"version":"wueoaYv.Jcjc4NKwBTERaALg1MBltFrd","loadedFromSource":true,"saved":true,"sourceSize":{"x":496,"y":236},"rootRelativePath":"assets/41b87d93-31a1-41ef-a523-4c36660e8f3f.png"},"5153a7b5-92f2-44d0-9a7f-5cdba07eb9a9":{"name":"car2","sourceUrl":null,"frameSize":{"x":448,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"rwOwSdcGEXZzbD8uIkF49GHHEfBLcylP","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":183},"rootRelativePath":"assets/5153a7b5-92f2-44d0-9a7f-5cdba07eb9a9.png"},"ac86131e-754f-45cf-a0b1-d8d125610b16":{"name":"bus","sourceUrl":null,"frameSize":{"x":498,"y":343},"frameCount":1,"looping":true,"frameDelay":12,"version":"hMS5TRVXLQxY7fD9.X443rBxm68hpbKm","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":343},"rootRelativePath":"assets/ac86131e-754f-45cf-a0b1-d8d125610b16.png"},"4260134c-cdf4-41aa-9e94-ab18ea675d85":{"name":"van","sourceUrl":null,"frameSize":{"x":501,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"MO.ZHwsTcwaKwkICVQqC8ZPSS.jbiNSs","loadedFromSource":true,"saved":true,"sourceSize":{"x":501,"y":268},"rootRelativePath":"assets/4260134c-cdf4-41aa-9e94-ab18ea675d85.png"},"432e2dad-e1d7-44ad-a299-44f07ead9e38":{"name":"truck1","sourceUrl":null,"frameSize":{"x":480,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"mFFs6kihZaFVLOvSXoUSiKoa6hfusCDd","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":336},"rootRelativePath":"assets/432e2dad-e1d7-44ad-a299-44f07ead9e38.png"},"f4dc3cbb-59af-4a97-bf98-f4b1d73b41b6":{"name":"rickshaw","sourceUrl":null,"frameSize":{"x":491,"y":360},"frameCount":1,"looping":true,"frameDelay":12,"version":"HZ9IfJThuA2iprxUeE20DUWRo3GekplE","loadedFromSource":true,"saved":true,"sourceSize":{"x":491,"y":360},"rootRelativePath":"assets/f4dc3cbb-59af-4a97-bf98-f4b1d73b41b6.png"},"e339234b-069e-4951-8cde-72786d82f5c5":{"name":"truck2","sourceUrl":null,"frameSize":{"x":406,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"D4WlSJOe8pVj5Jxs_3ahnhQb8jg2_chl","loadedFromSource":true,"saved":true,"sourceSize":{"x":406,"y":224},"rootRelativePath":"assets/e339234b-069e-4951-8cde-72786d82f5c5.png"},"9a030b8d-5769-42ab-8ce6-67deaef50b0b":{"name":"school","sourceUrl":null,"frameSize":{"x":498,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"IEiNst0FS4yiTpj2sgirngcamctJHmyt","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":376},"rootRelativePath":"assets/9a030b8d-5769-42ab-8ce6-67deaef50b0b.png"},"d9af1eb3-0fc8-403d-bbdc-5edacc6b8f3b":{"name":"timeout","sourceUrl":"assets/v3/animations/U9zPDscCJxXcBxpuJohieJ3KLyixZQrXbOMlM0F_Bhk/d9af1eb3-0fc8-403d-bbdc-5edacc6b8f3b.png","frameSize":{"x":498,"y":422},"frameCount":1,"looping":true,"frameDelay":4,"version":"tR4k1rQ7Ldccp83gbUZfCRrVW3kzfW1.","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":422},"rootRelativePath":"assets/v3/animations/U9zPDscCJxXcBxpuJohieJ3KLyixZQrXbOMlM0F_Bhk/d9af1eb3-0fc8-403d-bbdc-5edacc6b8f3b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var time=10



var line1=createSprite(200,327,400,1)
line1.shapeColor="white"
var line2=createSprite(200,254,400,1)
line2.shapeColor="white"
var line3=createSprite(200,185,400,1)
line3.shapeColor="white"
 var line4=createSprite(200,111,400,2)
 
 
 var school=createSprite(200,40,10,10)
school.setAnimation("school")
school.scale=0.3

var ob1=createSprite(-10,327,10,10)
ob1.setAnimation("car2")
ob1.scale=0.2
var ob2=createSprite(-10,185,10,10)
ob2.setAnimation("bike")
ob2.scale=0.2
var ob3=createSprite(410,254,10,10)
ob3.setAnimation("rickshaw")
ob3.scale=0.1
var ob4=createSprite(410,111,10,10)
ob4.setAnimation("car1")
ob4.scale=0.1

var girl=createSprite(200,390,10,10)
girl.setAnimation("girl2")
girl.scale=0.9


playSpeech("I am pinky i want to go to my school on time ,help me to cross the roads,press space to start", "female", "English");

function draw() {
  background("white")
createEdgeSprites()


stroke("lightblue")
strokeWeight(3)
textFont("Times New Roman")
fill ('red')
text("Time Remaining (minutes): "+time,0,15)
fill("black")
rect(0,313,400,30)
rect(0,240,400,30)
rect(0,169,400,30)
rect(0,97,400,30)



 

 if(keyDown("up"))
 {
   girl.y-=1;
 }
 
 if (keyDown("down")) {
   girl.y+=1
 }
 
 if(keyDown("left"))
 {girl.x-=1}
 
 if(keyDown("right"))
 {girl.x+=1}
 
 
 if(keyDown("space")){
   girl.setAnimation("girl")
   girl.scale=0.09
ob1.velocityX=10
ob2.velocityX=10
ob3.velocityX=-10
ob4.velocityX=-10
 }
 
 
     if(ob1.x>=410)
 {ob1.velocityX=-10
ob1.setAnimation("bus")
   ob1.scale=0.2
 }
 
 if (ob1.x<=-11)
 {ob1.velocityX=10
  ob1.setAnimation("car2")
ob1.scale=0.2
 }
 
 
     if(ob2.x>=410)
 {ob2.velocityX=-10
   ob2.setAnimation("truck2")
ob2.scale=0.2
 }
 
 if (ob2.x<=-11)
 {ob2.velocityX=10
   ob2.setAnimation("truck1")
ob2.scale=0.1
 }
 
   if(ob3.x>=411)
 {ob3.velocityX=-10
   ob3.setAnimation("rickshaw")
ob3.scale=0.1
 }
 
 if (ob3.x<=-11)
 {ob3.velocityX=10
   ob3.setAnimation("bike")
ob3.scale=0.2
 }
 
 if(ob4.x>=411)
 {ob4.velocityX=-10
   ob4.setAnimation("car1")
ob4.scale=0.1
 }
 
 if (ob4.x<=-11)
 {ob4.velocityX=10
   ob4.setAnimation("van")
ob4.scale=0.1
 }

 if (girl.isTouching(school)){
 var bg=createSprite(200,200,400,400)
  bg.setAnimation("bg")
   bg.scale=2
  var pinky=createSprite(100,300,10,10)
   pinky.setAnimation("girl3")
   pinky.scale=0.7
 }
 
 if(girl.isTouching(ob1)||girl.isTouching(ob2)||
 girl.isTouching(ob3)||girl.isTouching(ob4))
 {girl.x=200
   girl.y=390
   time--
playSound("assets/category_points/negative_point_counter_2.mp3", false);
 }
 
 if (time===0) {
   var bg2=createSprite(200,200,400,400)
bg2.setAnimation("timeout")

}
 
 drawSprites()

  if(girl.isTouching(school))
  { 
    textSize(20)
    text("YOU WON",200,200)
      text("BYE...its time for school",200,250)
textSize(30)
text("YOUR SCORE = "+time ,100,50)
  }

if (time<=0) {
 textSize(30)
  text("YOU ARE LATE TO SCHOOL",10,50)

}
}
 
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
