<h3>Application Marvel Web</h3>

<p> 
This is a web application developed in ReactJS, this app consumes Marvel's web api. This small application was developed in the learning instinct and also for fun.
</p>

<h3>Functionalities</h3>

<p> 
 In this application you can find by your favorite characters from the Marvel world, after finding a character you can add to your list of favorites, once this you can see more details of a certain character.
</p>
<b>example character: Spider-man</b>

<h3>Requirements</h3>

<ul>
  <li>It is recommended to use version NodeJS >= 10.x</li>
<ul>
 
 <h3>Marvel Api Keys</h3>
 
 <p> 
   To consume the marvel api it is necessary to generate some credentials, you can generate this information and see more details on the marvel developer website:      https://developer.marvel.com/
 </p>
 
  <h3>Adding credentials</h3>
  
   <p> 
  After you get your keys from the Marvel developer website, you must set the information in the variables of the .env file that you will have to create at the root of the project, follow the example .env-example file. Below is the information for each variable:
 </p>
 
 <ul>
  <li><b>REACT_APP_HOST:</b>https://gateway.marvel.com/v1/public/</li>
  <li><b>REACT_APP_TIMESTAMP:</b>In this variable, you must set a timestamp</li>
  <li><b>REACT_APP_APIKEY:</b>In this variable you must set your public key generated on the Marvel developer website.</li>
  <li><b>REACT_APP_HASH:</b>In this variable you should generate an md5 hash of your: timestamps (REACT_APP_TIMESTAMP), your private key and your public key.  <b>Example: md5 (timestamps + privateKey + publicKey)</b></li>
<ul>
 

