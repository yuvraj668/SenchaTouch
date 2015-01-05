SenchaTouch
===========
<strong>
1. What is Sencha Touch ?
</strong>

- High performance, Hybrid App development Framework.
- Uses HTML5
- Used to produce native like experience.
- Android, iOS, Windows, BlackBerry


<strong>
2. Install Required Set-ups
</strong>
- Java
- Ruby
- Secha CMD
- Sencha Touch (Zip)

<strong>
3. Creating Skeleton App
</strong>
<br>
Create a sencha skeleton app using following line in CMD prompt
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
sencha -sdk /path/to/touch/directory generate app <app_name> /path/to/app/
<br>
Ex.
&nbsp;&nbsp;

sencha -sdk D:\Softwares\sencha\touch\touch-2.3.1 generate app Flipcart Flipcart

<br><br>
<strong>
4. Initialize Cordova
</strong>
<br><br>
sencha codeova init


<br><br>
<strong>
5. Edit Cordova Platforms 
</strong>
<br><br>
a. Open app.json<br>
b. Go to Builds >> native >> Cordova >> Config >> Platforms<br>
c. Do as commented there<br>
 
<br><br>
<strong>
6. Build and Run App
</strong>
<br><br>
sencha app build -run native
