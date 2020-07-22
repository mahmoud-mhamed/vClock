$(function () {

/*setting css*/
    $('header nav.navbar-fixed-left').css({
        paddingTop:$('header nav.fixed-top').outerHeight(true)-10
    });

    $('body').css({
        paddingTop: $('header nav.fixed-top').outerHeight(true),
        marginLeft: $('header #navLeft').css('display')=='none'?0:$('header nav.navbar-fixed-left').outerWidth(true),

    });
    $(window).resize(function () {
        $('header nav.navbar-fixed-left').css({
            paddingTop:$('header nav.fixed-top').outerHeight(true)-10
        });
        $('body').css({
            paddingTop: $('header nav.fixed-top').outerHeight(true),
            marginLeft: $('header #navLeft').css('display')=='none'?0:$('header nav.navbar-fixed-left').outerWidth(true),
        });
    });

    /*end seting css*/
    /*set date now in any place*/
    function setDate(time,second,date,formatDate=''){
        formatDate=formatDate==''?'dd . MM . yyyy':formatDate;
        $(time).html(new Date().toString('hh:mm ss'));
        $(second).html(new Date().toString('tt'));
        $(date).html(new Date().toString(formatDate));
    }

    function runSetDateNow(){
        /*run header and any thing has data-date*/
        var time=$('div.run *').filter("[data-date='time']");
        var second=$('div.run *').filter("[data-date='second']");
        var date=$('div.run *').filter("[data-date='date']");
        setDate(time,second,date,'ddd - MMMM, yyyy');
    }
    runSetDateNow();
    setInterval(runSetDateNow,1000);



    /*chang aside when click in a in header*/
    $('body').on('click','#navLeft a[data-aside]',function () {
        $(' #navLeft a[data-aside]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('main>aside').addClass('d-none');
        var dataAside=($(this).attr('data-aside'));
        $('main aside.'+dataAside).removeClass('d-none');
        $('#spanHeader').html($(this).attr('data-aside'));
    });

/*start stopWatch*/
    var stopWatchTime={millisecond:0,second:0,minute:0,hour:0,state:'reset',
        timeItem:$('aside.stopWatch div.h1 span[data-date="date"]'),
        secondItem:$('aside.stopWatch div.h1 span[data-date="second"]'),
        miliSecondItem:$('aside.stopWatch div.h1 sub')};
    var intervalStopWatch;
    var intervalmillisecondStopWatch;
    function runStopWatch(){
        stopWatchTime.second++;
        if (stopWatchTime.second>=60){
            stopWatchTime.miliSecond=0;
            stopWatchTime.second =0;
            stopWatchTime.minute++;
            if (stopWatchTime.minute>=60){
                stopWatchTime.minute=0;
                stopWatchTime.hour++;
            }
        }
        stopWatchTime.secondItem.html((stopWatchTime.second>9?stopWatchTime.second:'0'+stopWatchTime.second));
        stopWatchTime.timeItem.html((stopWatchTime.hour>9?stopWatchTime.hour:'0'+stopWatchTime.hour) +' : '+(stopWatchTime.minute>9?stopWatchTime.minute:'0'+stopWatchTime.minute) +' : ');
    }
    function runSecondStopWatch(){
        stopWatchTime.millisecond++;
        if (stopWatchTime.millisecond>=99){
            stopWatchTime.millisecond=0;
        }
        stopWatchTime.miliSecondItem.html('.'+stopWatchTime.millisecond);
    }
    $('aside.stopWatch button[data-button="start"]').click(function () {
        if (stopWatchTime.state=='reset'){
            stopWatchTime.state='run';
            intervalStopWatch=setInterval(runStopWatch,1000);
            intervalmillisecondStopWatch=setInterval(runSecondStopWatch,10);
            $(this).html('Pause');
            $(this).removeClass('btn-success').addClass('btn-warning');
            $('#navLeft a[data-aside="stopWatch"]').removeClass('stopPlayFont').addClass('playFont');

        }else if (stopWatchTime.state=='run'){
            stopWatchTime.state='pause';
            window.clearInterval(intervalStopWatch);
            window.clearInterval(intervalmillisecondStopWatch);

            $(this).html('Continue');
            $(this).addClass('btn-success').removeClass('btn-warning');
            $('#navLeft a[data-aside="stopWatch"]').removeClass('playFont').addClass('stopPlayFont');
        }else if (stopWatchTime.state=='pause'){
            stopWatchTime.state='run';
            intervalStopWatch=setInterval(runStopWatch,1000);
            intervalmillisecondStopWatch=setInterval(runSecondStopWatch,10);
            $(this).html('Pause');
            $(this).removeClass('btn-success').addClass('btn-warning');
            $('#navLeft a[data-aside="stopWatch"]').removeClass('stopPlayFont').addClass('playFont');
        }

    });


    /*reset stop watchTime*/
    $('aside.stopWatch button[data-button="reset"]').click(function () {
        window.clearInterval(intervalStopWatch);
        window.clearInterval(intervalmillisecondStopWatch);
        $('#navLeft a[data-aside="stopWatch"]').removeClass('stopPlayFont').removeClass('playFont');
        $('aside.stopWatch button[data-button="start"]').html('Start').addClass('btn-success').removeClass('btn-warning');
        stopWatchTime.millisecond=0;
        stopWatchTime.waitBeforeAddSecond=0;
        stopWatchTime.second=0;
        stopWatchTime.minute=0;
        stopWatchTime.hour=0;
        stopWatchTime.state='reset';
        stopWatchTime.miliSecondItem.html('.'+stopWatchTime.millisecond);
        stopWatchTime.secondItem.html((stopWatchTime.second>9?stopWatchTime.second:'0'+stopWatchTime.second));
        stopWatchTime.timeItem.html((stopWatchTime.hour>9?stopWatchTime.hour:'0'+stopWatchTime.hour) +' : '+(stopWatchTime.minute>9?stopWatchTime.minute:'0'+stopWatchTime.minute) +' : ');

    });
});
/*start timer*/
$(function () {
    $('aside.timer i').click(function () {
        var songId=$('aside.timer select option:selected').data('play');
        if ($(this).attr('data-nextclick')=='play'){
            $('#'+songId)[0].currentTime=0;
            $('#'+songId)[0].play();
            $(this).attr({
                'class':'fa fa-stop',
                'data-nextclick':'stop'
            });
        } else {
            $('#' + songId)[0].pause();
            $(this).attr({
                'class': 'fa fa-play',
                'data-nextclick': 'play'
            });
        }
    });
    $('aside.timer select').click(function () {
        var songId=$('aside.timer select option:selected').data('play');
        $('#'+songId)[0].pause();
        $('aside.timer i').attr({
            'class':'fa fa-play',
            'data-nextclick':'play'
        });
    });

    var timerItemHour=$('aside.timer input[data-value="hour"]');
    var timerItemMinute=$('aside.timer input[data-value="minute"]');
    var timerItemSecond=$('aside.timer input[data-value="second"]');
    var intervalTimer;
    function runTimer() {
        timerItemHour.attr('disabled','disabled');
        timerItemMinute.attr('disabled','disabled');
        timerItemSecond.attr('disabled','disabled');
        var hour=timerItemHour.val();
        var minute=timerItemMinute.val();
        var second=timerItemSecond.val();
        if (second==0){
            if (minute==0){
                if (hour==0){
                    var songId=$('aside.timer select option:selected').data('play');
                    $('#'+songId)[0].currentTime=0;
                    $('#'+songId)[0].play();
                    $('aside i').attr({
                        'class':'fa fa-stop',
                        'data-nextclick':'stop'
                    });
                    clearInterval(intervalTimer);

                    $.confirm({
                        text: "stop Timer?",
                        confirm: function() {
                            $('aside.timer button[data-button="reset"]').trigger('click');
                        },
                        cancel: function() {

                        }
                    });

                } else {
                    hour --;
                    minute =59;
                    second =59;
                }
            } else {
                minute --;
                second =59;
            }
        } else {
            second --;
        }

        timerItemHour.val(hour);
        timerItemSecond.val(second);
        timerItemMinute.val(minute);
    }

    var runTimerState='false';
    $('aside.timer button[data-button="start"]').click(function () {
        if (runTimerState=="false"){
            $('input[type="number"]').each(function () {
                if ($(this).val().trim()==''){
                    $(this).val('0');
                }
            });
            if ($('aside.timer input[data-value="hour"]').val()!='0' ||
                $('aside.timer input[data-value="minute"]').val()!='0'||
                $('aside.timer input[data-value="second"]').val()!='0'){
                runTimer();
                intervalTimer=setInterval(runTimer,1000);
                runTimerState='true';
                $(this).html('Pause').removeClass('btn-success').addClass('btn-warning');

                $('#navLeft a[data-aside="timer"]').removeClass('stopPlayFont').addClass('playFont');

            }
        } else {
            clearInterval(intervalTimer);
            $('aside.timer input[data-value="hour"]').removeAttr('disabled');
            $('aside.timer input[data-value="minute"]').removeAttr('disabled');
            $('aside.timer input[data-value="second"]').removeAttr('disabled');
            runTimerState='false';
            $(this).html('Start').removeClass('btn-warning').addClass('btn-success');
            $('#navLeft a[data-aside="timer"]').removeClass('playFont').addClass('stopPlayFont');

        }


    });
    $('aside.timer button[data-button="reset"]').click(function () {
        clearInterval(intervalTimer);
        $('aside.timer input[data-value="hour"]').val('0').removeAttr('disabled');
        $('aside.timer input[data-value="minute"]').val('0').removeAttr('disabled');
        $('aside.timer input[data-value="second"]').val('0').removeAttr('disabled');
        runTimerState='false';
        $('aside.timer button[data-button="start"]').html('Start').removeClass('btn-warning').addClass('btn-success');
        $('#navLeft a[data-aside="timer"]').removeClass('stopPlayFont').removeClass('playFont');

        var songId=$('aside.timer select option:selected').data('play');
        $('#' + songId)[0].pause();
        $('aside.timer i').attr({
            'class': 'fa fa-play',
            'data-nextclick': 'play'
        });

    });

});

/*start alarm*/
$(function () {
    $('aside.alarm i').click(function () {
        var songId=$('aside.alarm select option:selected').data('play');
        if ($(this).attr('data-nextclick')=='play'){
            $('#'+songId)[0].currentTime=0;
            $('#'+songId)[0].play();
            $(this).attr({
                'class':'fa fa-stop',
                'data-nextclick':'stop'
            });
        } else {
            $('#' + songId)[0].pause();
            $('aside.alarm i').attr({
                'class': 'fa fa-play',
                'data-nextclick': 'play'
            });
        }
    });
    $('aside.alarm select').click(function () {
        var songId=$('aside.alarm select option:selected').data('play');
        $('#'+songId)[0].pause();
        $('aside.alarm i').attr({
            'class':'fa fa-play',
            'data-nextclick':'play'
        });
    });

    var alarmItemHour=$('aside.alarm input[data-value="hour"]');
    var alarmItemMinute=$('aside.alarm input[data-value="minute"]');
    var alarmItemWait=$('aside.alarm h3 span');
    var intervalAlarm;
    function runAlarm() {
        var timeNow=new Date().toString('HH:mm:ss');
        if (timeNow==timeRing){
            $('aside.alarm button[data-button="stop"]').trigger('click');
            var songId=$('aside.alarm select option:selected').data('play');
            $('#'+songId)[0].currentTime=0;
            $('#'+songId)[0].play();
            $('aside.alarm i').attr({
                'class':'fa fa-stop',
                'data-nextclick':'stop'
            });
            $.confirm({
                text: "stop Alarm?",
                confirm: function() {
                    $('aside.alarm button[data-button="stop"]').trigger('click');
                },
                cancel: function() {

                }
            });
        }else {
            /*set timeUntilRing*/
            var timeNow=new Date().toString('HH:mm:ss');
            var splitTimeNow=timeNow.split(':');
            var timeNowBerSecond=splitTimeNow[0]*60*60- -splitTimeNow[1]*60- -splitTimeNow[2];

            var splitTimeRing=timeRing.split(":");
            var timeRingBerSecond=splitTimeRing[0]*60*60- -splitTimeRing[1]*60- -splitTimeRing[2];


            var timeUntilRingBerSecond;
            if (timeRingBerSecond < timeNowBerSecond){
                timeRingBerSecond=timeRingBerSecond- -24*60*60;
            }
            timeUntilRingBerSecond=Math.abs((timeRingBerSecond - timeNowBerSecond));

            var innerHtmlValue={hour:'0',minute:'0',second:'0'};
            if (timeUntilRingBerSecond<60) {
                innerHtmlValue.second=timeUntilRingBerSecond;
            }else {
                innerHtmlValue.hour=Math.trunc((timeUntilRingBerSecond/60)/60);
                innerHtmlValue.minute=Math.trunc((timeUntilRingBerSecond/60))-innerHtmlValue.hour*60;
                innerHtmlValue.second=Math.trunc(timeUntilRingBerSecond)-innerHtmlValue.hour*60*60-innerHtmlValue.minute*60;
            }
            alarmItemWait.html(innerHtmlValue.hour+':'+innerHtmlValue.minute+'.'+innerHtmlValue.second);

        }

    }

    var timeRing;//store only time ring hh:mm
    $('aside.alarm button[data-button="start"]').click(function () {
        $('input[type="number"]').each(function () {
            if ($(this).val().trim()==''){
                $(this).val('0');
            }
        });
        var hour=parseInt(alarmItemHour.val());
        var minute=parseInt(alarmItemMinute.val());
        if (hour>23){
            hour='0';
            alarmItemHour.val('0');
        }
        if (minute>59){
            minute='0';
            alarmItemMinute.val('0');
        }
        if ($(this).attr('nextClick')!='stop'){
            if (hour!=0||minute!=0){
                alarmItemHour.attr('disabled','disabled');
                alarmItemMinute.attr('disabled','disabled');

                timeRing=new Date().at({hour:hour, minute:minute});
                timeRing=timeRing.toString('HH:mm:00');

                $(this).html('Pause').removeClass('btn-success').addClass('btn-warning');
                $('#navLeft a[data-aside="alarm"]').removeClass('stopPlayFont').addClass('playFont');
                runAlarm();
                intervalAlarm=setInterval(runAlarm,1000);
                $(this).attr('nextClick','stop');
                $('aside.alarm h3').show();

            }
        } else {
            $(this).html('Start').removeClass('btn-warning').addClass('btn-success');
            $('#navLeft a[data-aside="alarm"]').removeClass('playFont').addClass('stopPlayFont');
            $(this).attr('nextClick','play');
            alarmItemHour.removeAttr('disabled');
            alarmItemMinute.removeAttr('disabled');
            clearInterval(intervalAlarm);
            $('aside.alarm h3').hide();
        }


    });
    $('aside.alarm button[data-button="stop"]').click(function () {
        clearInterval(intervalAlarm);
        alarmItemHour.removeAttr('disabled');
        alarmItemMinute.removeAttr('disabled');
        $('aside.alarm h3').hide();

        var songId=$('aside.alarm select option:selected').data('play');
        $('#'+songId)[0].pause();
        $('aside.alarm i').attr({
            'class':'fa fa-play',
            'data-nextclick':'play'
        });

        $('aside.alarm button[data-button="start"]').html('Start').
        removeClass('btn-warning').addClass('btn-success').attr('nextClick','play');
        $('#navLeft a[data-aside="alarm"]').removeClass('playFont').removeClass('stopPlayFont');

    });


});