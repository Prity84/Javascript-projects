## Async projects 1 - 
```Javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai or javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
   // const saydate = function(){
   //     console.log("prity", Date.now());
   // }
    //setInterval(saydate, 2000)

    // with 3rd parameter

   // const saydate = function(str){
   //     console.log(str, Date.now());
   // }
    //setInterval(saydate, 1000, "hi") 

    //to stop there is clearinterval 

    
   // const intervalId = setInterval(saydate, 1000, "hi") 
    // clearInterval(intervalId)
 
   const start = document.querySelector('#start')
   const stop = document.querySelector('#stop')
   let interval;
   const Sayname = (name) =>{
    console.log(name, Date.now());
   }
   start.addEventListener('click', function(){
   console.log("START")
    interval = setInterval(Sayname, 1000, "prity")
   })
   stop.addEventListener('click', function(){
    clearInterval(interval)
    console.log("STOPPED");
   })

</script>
</html>

```

## Async project 2
```Javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai or javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
   // const saydate = function(){
   //     console.log("prity", Date.now());
   // }
    //setInterval(saydate, 2000)

    // with 3rd parameter

   // const saydate = function(str){
   //     console.log(str, Date.now());
   // }
    //setInterval(saydate, 1000, "hi") 

    //to stop there is clearinterval 

    
   // const intervalId = setInterval(saydate, 1000, "hi") 
    // clearInterval(intervalId)
 
   const start = document.querySelector('#start')
   const stop = document.querySelector('#stop')
   let interval;
   const Sayname = (name) =>{
    console.log(name, Date.now());
   }
   start.addEventListener('click', function(){
   console.log("START")
    interval = setInterval(Sayname, 1000, "prity")
   })
   stop.addEventListener('click', function(){
    clearInterval(interval)
    console.log("STOPPED");
   })

</script>
</html>
```

## Async project 3
```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project3</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        body {
            display: grid;
            place-items: center;
            text-align: center;
            gap: 10px;
            height: 100vh;
            color: rgb(189, 20, 48);
        }

        button {
            padding: 7px 20px;
            margin-top: 9px;
            color: rgb(189, 20, 48);
            border: none;
        }

        button:hover {
            background-color: blue;
            cursor: pointer;

        }

        .container {
            background-color: black;
            height: 140px;
        }

        .container h1 {
            font-size: 35px;
            margin: 5px 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Start should change the Background color every second</h1>
        <div><button id="start"> Start </button>
            <button id="stop">Stop</button>
        </div>
    </div>
</body>
<script>
    // Generate Random Color
    const randomcolor = function () {
        const hex = " 0123456789ABCDEF"
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let interval;
    const startChangingColor = function () {
        interval = setInterval(changebgColor, 1000);
        function changebgColor() {
            document.body.style.backgroundColor = randomcolor();
        }
    };
    const stopChangingColor = function () {
        clearInterval(interval);
    }
    document.querySelector("#start").addEventListener('click', startChangingColor);
    document.querySelector("#stop").addEventListener('click', stopChangingColor);

</script>

</html>
```

## Async project 4
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async project</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        body{
            background-color: #2b2a2a;
        }
        nav{
            background-color: #ccc;
            height:10vh;
            display: flex;
            justify-content: center;
            gap: 50px;
            align-items: center;
        }
        a{
            background-color: #0c2988;
            color: white;
            padding: 8px 20px;
            border-radius: 5px;
            border-color: 1px solid rgb(149, 110, 19);
            text-decoration: none;
        }
        #insert{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
        }

    </style>
</head>
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="https://www.linkedin.com/in/prity-kushwaha84/">Linkedin</a>
    </nav>
    <div class="projects">
        <div id="insert">
            <div class="key">Press the key and watch magic</div>
        </div>
    </div>
</body>
<script>
    const insert = document.getElementById('insert')
    window.addEventListener('keydown', (e) => {
        insert.innerHTML = ` 
        <div class = 'color'> 
            <table>
            <tr>
              <th>key</th>
              <th>keycode</th>
              <th>code</th>
            </tr>
            <tr>
              <td> ${e.key === "" ?"Space" : e.key}</td>
              <td>${e.keyCode}</td>
              <td>${e.code}</td>
            </tr>
           
          </table>
        </div>
        `
    }) 
</script>
</html>
```