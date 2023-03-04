let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0d6a78;">Desarrollo sitios web, escribo y creo videos de literatura.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
