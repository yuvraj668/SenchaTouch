===========================
SenchaTouch Installation Steps
===========================

A. Install Required Set-ups	<br>
B. Get Started With SenchaTouch


<strong>A. Install Required Set-ups</strong>

1. Install <a href="http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html" target="_blank">Java</a><br>

2. Install <a href="http://www.ruby-lang.org/en/downloads/" target="_blank">Ruby</a><br>

3. Download and unzip <a href="http://www.sencha.com/products/touch/download" target="_blank">Sencha Touch</a>. You can unzip the software to any directory.	<br>

4. Install <a href="http://www.sencha.com/products/sencha-cmd/download" target="_blank">Sencha Cmd</a>


<strong>B. Get Started With SenchaTouch</strong>

1. Create a Sencha App <br>
	<em> sencha -sdk <sencha_touch_folder_path> generate app <app_name> <folder_name></em> 	<br>
		
	Example: <br>
	<em> 	sencha -sdk D:\Softwares\sencha\touch-2.4.0 generate app SenchaApp SenchaTouch </em> 	<br>
				
2. Initialize Cordova or Phonegap	<br>
	<em> 	sencha cordova init		</em> <br>
			OR	<br>
	<em> 	sencha phonegap init 	</em> <br>
		
3. Add Native Platforms 	<br>
		a. Open app.json	<br>
		b. Go to builds >> native >> cordova >> config   <br>
		c. Set platforms variable line  <br>
		
4. Build and Run App in Connected Device	<br>
		<em> sencha app build -run native </em> 
		
		

===========================
<strong>References</strong>
===========================

1. <a href="http://docs.sencha.com/touch/2.4.0/getting_started/getting_started.html" target="_blank">SenchaTouch Docs</a>