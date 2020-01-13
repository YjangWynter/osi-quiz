const QUIZLENGTH = 9;

const ORGINFO = [

    {
        name: "Late Knights",
        info: "Agency 1",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Knights of the Round Table",
        info: "Agency 2",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Knight-thon",
        info: "Agency 3",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Campus Activities Board",
        info: "Agency 4",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Knights of the Connection",
        info: "Agency 5",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Volunteer UCF",
        info: "Agency 6",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Student Engagement",
        info: "Agency 7",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Homecoming",
        info: "Agency 8",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Rosen Life",
        info: "Agency 9",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "OSI Productions",
        info: "Agency 10",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Knights of the Turntables",
        info: "Agency 11",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Black & Gold Studios",
        info: "Agency 12",
        link: "https://osi.ucf.edu/agencies/"
    },


    {
        name: "Graduate Outreach",
        info: "Agency 13",
        link: "https://osi.ucf.edu/agencies/"
    },

    {
        name: "Design Group",
        info: "Agency 14",
        link: "https://osi.ucf.edu/agencies/"
    },

];

// Bonnieblue would like a dropdown menu for the additional matches for the user
var Quiz = function () {
    var self = this;
    this.init = function () {
        self._bindEvents();
    }

    this._selectAnswer = function ($choice, $question) {
        //Disable all choices
        $question.find(".quiz-choice").removeClass("active");
        $question.find(".quiz-choice").addClass("disabled");

        //Activate selected choice
        $choice.removeClass("disabled");
        $choice.addClass("active");
    }

    //Returns true if each question has a selected response
    this._isComplete = function () {
        let answersChosen = 0;
        $("ul[data-quiz-question]").each(function () {
            if ($(this).find(".quiz-choice.active").length > 0) {
                answersChosen++;
            }
        });
        return (answersChosen >= QUIZLENGTH);
    }

    //Returns array of user responses
    this._tallyResponses = function () {
        let choiceList = new Array();
        $("ul[data-quiz-question]").each(function () {
            choiceList.push($(this).find(".quiz-choice.active").data("choice-value"));
        });
        return choiceList;
    }

    this._calcResult = function () {
        // orgsAnswers[0] = Late Knights
        const lk = new Array(["b"], ["a", "b", "c", "d", "e"], ["b", "c"], ["a"], ["a", "c", "f"], ["c", "d"], ["b"], ["g"], ["c"]);
        // orgsAnswers[1] = Knights of the Round Table
        const kort = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["b"], ["b"], ["a", "e", "f"], ["a, c, d"], ["b", "d"], ["f"], ["a", "b", "c", "d", "e"]);
        // orgsAnswers[2] = Knight-Thon
        const kt = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["b,d"], ["a"], ["a", "b", "e"], ["b", "c", "d"] + ["a", "c"], ["h"], ["a", "b", "c", "d", "e"]);
        // orgsAnswers[3] = Campus Activities Board
        const cab = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["a", "b"], ["a"], ["b", "d", "e", "f"], ["c", "d"], ["b", "e", "f"], ['e'], ["a", "b", "c"]);
        //orgsAnswers[4] = Knights of the Connection
        const kotc = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["a", "b"], ["a", "b", "f"], ["a", "c", "d"], ["b", "d"], ["f", "i"], ["b", "c"]);
        //orgsAnswers[5] = Volunteer UCF
        const vucf = new Array(["a"], ["a", "b", "c", "d", "e"], ["b", "c"], ["a", "b"], ["b", "e", "f"], ["a", "c", "d"], ["b", "e", "f"], ["a", "f", "i"], ["b", "e"]);
        //orgsAnswers[6] = Student Engagement
        const se = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["c"], ["a", "b"], ["b", "e", "f"], ["a", "c", "d"], ["b", "e", "f"], ["a", "f", "i"], ["b", "e"]);
        //orgsAnswers[7] = Homecoming
        const hc = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["b"], ["a"], ["a", "b", "c", "d", "e", "f"], ["b", "c", "d"], ["b", "c"], ["i"], ["a", "b", "c", "d", "e"]);
        //orgsAnswers[8] = Rosen Life
        const rl = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"], ["a"], ["a"], ["a", "b", "c", "d", "e", "f"], ["b", "c", "d"], ["b", "c"], ["g"], ["a", "b", "c", "d", "e"]); //orgsAnswers[9] = OSI Productions
        //orgsAnswers[9] = OSI Productions
        const prod = new Array(["b"], ["a"], ["b", "c"], ["a"], ["a", "c", "d"], ["b", "c", "d"], ["e", "f"], ["b", "c", "d"], ["a", "b", "c", "d", "e"]);
        //orgsAnswers[10] = Knights of the Turntables
        const kott = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["a", "b", "c"], ["a"], ["a", "b", "d"], ["b", "c", "d"], ["e", "f"], ["b"], ["a", "b", "c", "d", "e"]);
        //orgsAnswers[11] = Black & Gold Studios
        const bng = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["a", "b"], ["a", "b"], ["a", "c", "d", "f"], ["a", "c", "d"], ["e", "f"], ["b", "c", "d"], ["a", "b", "c", "d", "e"]);
        //orgsAnswers[12] = Graduate Outreach
        const go = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["b"], ["b"], ["a", "b", "c", "d", "e", "f"], ["a", "b", "c", "d"], ["a", "b", "c", "d", "e", "f"], ["a", "b", "c", "d", "e", "f", "h", "i"], ["a", "b", "c", "d", "e"]);
        //orgsAnswers[13] = Design Group
        const dg = new Array(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"], ["c", "e"], ["c", "f"]);

        //add them all into one master array
        const orgsAnswers = new Array(lk, kort, kt, cab, kotc, vucf, se, hc, rl, prod, kott, bng, go, dg)

        const userChoices = this._tallyResponses();

        let finalPoints = new Array(ORGINFO.length).fill(0);

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        function addPoints(choice, j) {
            for (var i = 0; i < orgsAnswers.length; i++) {
                if (orgsAnswers[i][j].includes(choice)) {
                    finalPoints[i]++;
                }
            }
        }

        function shuffledMatchList(a) {
            var i = 0,
                maxList = new Array(),
                max = 0;

            for (i = 0; i < a.length; i++) {
                if (a[i] > max) {
                    max = a[i];
                }
            }

            for (i = 0; i < a.length; i++) {
                if (a[i] == max) {
                    maxList.push(i);
                }
            }

            return shuffle(maxList);
        }

        userChoices.forEach(addPoints);
        console.log(shuffledMatchList(finalPoints));
        return shuffledMatchList(finalPoints);
    }

    this._showResult = function () {
        let $resultBox = $(".result");
        console.log($resultBox)
        let resultList = self._calcResult();


        $resultBox.addClass("resultComplete jumbotron");
        $resultBox.html("<h1 class='mb-4'><p>Here is your result!</p> <p>You matched with <i>"+ORGINFO[resultList[0]].name+'</i></p> </h1> <p>'+ORGINFO[resultList[0]].info+'</p><p class="text-center"><a class="my-3 mx-auto btn btn-primary btn-lg" href="'+ORGINFO[resultList[0]].website+'"target="_blank"><strong>Visit Website</strong></a></p>');

        const resultToString = () => {
            var myStr = '';
            for (let i = 1; i < resultList.length; i++) {
                myStr += '<li ><a class="collapsed" href="#collapseInfo-'+i+'"data-toggle="collapse" role="button" aria-expanded="false" id="info-'+i+'"><h4><strong><u>'+ORGINFO[resultList[i]].name+'</u></strong></h4></a></li><p class="collapse text-center" id="collapseInfo-'+i+'">'+ORGINFO[resultList[i]].info+'<br><a class ="btn btn-primary btn-lg my-3 mx-auto text-center" href="'+ORGINFO[resultList[i]].link+'" target="_blank"><strong>Visit Website</strong></a></p>';

            }
            return myStr;
        }
        if (resultList.length > 1) {
            $resultBox.append('<hr class="my-4"><h2><strong> You also matched with:</strong></h2> <ul id="accordion">'+resultToString()+'</ul><br>');
        }
        $resultBox.append('<hr class="my-4"><p class="text-center">Schedule a consultation with KnightQuest to learn more about your program and many others. Be sure to screenshot your result!</p><p class="text-center"><a class="btn btn-primary btn-lg" href="mailto:kortoutreach@ucf.edu?subject=Schedule KnightQuest Appointment&body=I got '+ORGINFO[resultList[0]].name+' as my result from the OSI Quiz. Could I schedule an appointment to learn more about it and my other options to get involved?"><strong>Schedule Consultation</strong></a></p>');
        //Animated scroll
        $("body, html").animate({
            scrollTop: (($resultBox).offset().top - 25) //25px for visual padding
        }, 500);
    }

    this._bindEvents = function () {
        let jumboList = new Array();
        $(".jumbotron").each(function () {
            jumboList.push($(this));
        });

        $(".quiz-choice").on("click", function () {
            let $choice = $(this);
            let $question = $choice.closest("ul[data-quiz-question]");
            self._selectAnswer($choice, $question);
            if (self._isComplete()) {
                self._showResult();
                return;
            }
            //Animated scroll to next Jumbotron element
            $("body, html").animate({
                scrollTop: (jumboList[parseInt($question.data("quiz-question"))]).offset().top - 25
            }, 500);
        });
    }
}

var quiz = new Quiz();
quiz.init();