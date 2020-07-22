<!doctype html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>Alarm</title>
    <link rel='icon' href='img/icon.png'>
    <link rel='stylesheet' href='css/bootstrap.min.css'>
    <link rel='stylesheet' href='css/animate.min.css'>
    <link rel='stylesheet' href='fonts/awesome/css/all.min.css'>
    <link href="https://fonts.googleapis.com/css?family=New+Rocker" rel="stylesheet">
    <link rel='stylesheet' href='css/navbar-fixed-left.min.css'>
    <link rel='stylesheet' href='css/b4_sidebar.css'>
    <link rel='stylesheet' href='css/navbar-fixed-left-and-write-with-updated.css'>
    <link rel='stylesheet' href='css/css.css'>

    <script src='js/jquery-3.3.1.min.js'></script>
    <script src='js/popper.min.js'></script>
    <script src='js/bootstrap.min.js'></script>
    <script src='js/wow.min.js'></script>
    <script src='js/b4_sidebar.js'></script>
    <script src='js/date.js'></script>
    <script src='js/jquery.confirm.min.js'></script>
    <script src='js/js.js'></script>
</head>
<body>
<!--start header-->
<header class='fixed-top'>
    <nav class="navbar navbar-expand-md clock navbar-light fixed-top ">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="" data-target="#navHead" aria-controls="navHead" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navHead">
            <ul class="navbar-nav m-auto">
                <li class="nav-item active">
                    <div class='run'>
                        <a class="nav-link h5 text-center" href="#">
                            <span class='' data-date='time'> 1:25:31  </span><small data-date='second'>AM</small><br/>
                            <span data-date='date'> Fri - Oct 5, 2018 </span>
                        </a>
                    </div>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link h5 mt-2  d-md-none d-sm-none d-lg-block" href="#">
                        <span>01018030420 <i class="fa fa-phone "></i></span>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link h5 mt-2" target='_blank' href="https://www.facebook.com/profile.php?id=100009734383434">
                        <span class=''>Programer Mahmoud Mohamed
                            <i class="fab fa-facebook-f"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <nav class="navbar navbar-expand-md navbar-dark  navbar-fixed-left sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
        <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLeft" aria-controls="navLeft" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>-->

        <div class="collapse navbar-collapse w-100" id="navLeft">
            <ul class="navbar-nav mr-auto text-center pl-0 pr-0 w-100">
                <li class="nav-item active">
                    <a class="nav-link" data-aside='alarm' href="#">
                        <i class="fas fa-bell fa-2x"></i>
                        <span>Alarm</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-aside='timer' href="#">
                        <i class="fa fa-clock fa-2x"></i>
                        <span>Timer</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-aside='stopWatch' href="#">
                        <i class="fas fa-stopwatch fa-2x"></i>
                        <span>StopWatch</span>
                    </a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link clock"  target='_blank' href="http://mahmoud-mohamed.eb2a.com/">
                        <i class="fab fa-optin-monster fa-2x"></i>
                        <span>My Web Site</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<!--start main-->
<main>
    <section class='time'>
        <div class="h2 clock run h-100 font-weight-bold text-center" >
            <span id='spanHeader' class='mr-2 d-md-none d-lg-none'>alarm</span>
            <span class='' data-date='time'> 1:25:31  </span><small data-date='second'>AM</small>
            <span data-date='date' class='pl-2 h4'> Fri - Oct 5, 2018 </span>
        </div>
    </section>
    <aside class='alarm p-3 p-md-5'>
        <h3 class='pb-2 text-capitalize clock' style='display: none'>The time remaining until the alarm ring is :
            <span class='d-inline-block' style='min-width: 170px'></span>
        </h3>
        <div  class='row no-gutters'>
            <div class="input-group mt-1 col-md-4 col-sm-4 px-0">
                <div class="input-group-prepend">
                    <span class="input-group-text">Hour</span>
                </div>
                <input type='number' data-value='hour' value='0' min='0' max='23' class="clock form-control"/>
            </div>
            <div class="input-group col-md-4 mt-1 col-sm-4 px-0">
                <div class="input-group-prepend ml-md-1">
                    <span class="input-group-text">Minute</span>
                </div>
                <input type='number' data-value='minute' value='0' min='0' max='59' class="clock form-control"/>
            </div>

            <div class='col-md-4 col-sm-12 mt-3 pl-5'>
                <i class="fa fa-play" data-nextclick='play'></i>
                <select class="custom-select w-auto">
                    <option selected data-play='song1'>اللهم صل...</option>
                    <option data-play="song5">dog</option>
                    <option data-play="song4">cat</option>
                    <option data-play="song2">1</option>
                    <option data-play="song3">2</option>
                </select>
            </div>
        </div>
        <div class='row no-gutters'>
            <button class='btn col btn-lg mr-2 mt-2 btn-danger font-weight-bold' data-button='stop'>Stop</button>
            <button class='btn col btn-lg ml-2 mt-2 btn-success font-weight-bold' data-button='start'>Start</button>
        </div>
    </aside>
    <aside class='timer p-3 p-md-5 d-none'>
        <div  class='row no-gutters'>
            <div class="input-group mt-1 col-md-3 col-sm-4 px-0">
                <div class="input-group-prepend">
                    <span class="input-group-text">Hour</span>
                </div>
                <input type='number' data-value='hour' value='0' min='0' max='24' class="clock form-control"/>
            </div>
            <div class="input-group col-md-3 mt-1 col-sm-4 px-0">
                <div class="input-group-prepend ml-md-1">
                    <span class="input-group-text">Minute</span>
                </div>
                <input type='number' data-value='minute' value='0' min='0' max='59' class="clock form-control"/>
            </div>
            <div class="input-group col-md-3 mt-1 col-sm-4 px-0">
                <div class="input-group-prepend ml-md-1">
                    <span class="input-group-text">Second</span>
                </div>
                <input type='number' data-value='second' value='0' min='0' max='59' class="clock form-control"/>
            </div>

            <div class='col-md-3 col-sm-12 mt-3 pl-1'>
                <i class="fa fa-play" data-nextclick='play'></i>
                <select class="custom-select w-auto">
                    <option selected data-play='song1'>اللهم صل...</option>
                    <option data-play="song5">dog</option>
                    <option data-play="song4">cat</option>
                    <option data-play="song2">1</option>
                    <option data-play="song3">2</option>
                </select>
            </div>
        </div>
        <div class='row no-gutters'>
            <button class='btn col btn-lg mr-2 mt-2 btn-danger font-weight-bold' data-button='reset'>Reset</button>
            <button class='btn col btn-lg ml-2 mt-2 btn-success font-weight-bold' data-button='start'>Start</button>
        </div>
    </aside>
    <aside class='stopWatch d-none text-center pt-4 pb-3'>
        <div class='h1 pb-2 clock'>
            <span data-date='date'>00 : 00 : </span><span data-date='second'>00</span>
            <sub class='h4'>.00</sub>
        </div>
        <div class='row pl-2 pr-2 no-gutters'>
            <button class='btn col btn-lg mr-2 mt-2 btn-danger font-weight-bold' data-button='reset'>Reset</button>
            <button class='btn col btn-lg ml-2 mt-2 btn-success font-weight-bold' data-button='start'>Start</button>
        </div>
    </aside>
</main>

<audio src='sound/1.mp3' loop id='song1'></audio>
<audio src='sound/2.mp3' loop id='song2'></audio>
<audio src='sound/3.mp3' loop id='song3'></audio>
<audio src='sound/cat.mp3' loop id='song4'></audio>
<audio src='sound/dog.mp3' loop id='song5'></audio>
</body>
</html>



