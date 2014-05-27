$(document).ready(function () {

// Questions Array

    var questions = [{
        question: "Pose 1 of 5",
        poseImage: '<img src="images/child.png" alt="Pose 1" id="poseImage">',
        choices: ["Downward Dog (Mukhasana)", "Child (Garbhasana)", "Bow (Duanurasana)", "Mountain (Tadasana)"],
        questionValue: 0,
        correct: 1,
        answerText: "Child (Garbhasana) – \"The Universe protects and nurtures me. I am secure and loved.\""
    }, {
        question: "Pose 2 of 5",
        poseImage: '<img src="images/bow.png" alt="Pose 2" id="poseImage">',
        choices: ["Bow (Dhanurasana)", "Boat", "Spider (Supta Padangusthasana)", "Bridge (Setu Bandhasana)"],
        questionValue: 1,
        correct: 0,
        answerText: "Bow (Dhanurasana) – \"I am the essence of strength and confidence.\""
    }, {
        question: "Pose 3 of 5",
        poseImage: '<img src="images/down-dog.png" alt="Pose 3" id="poseImage">',
        choices: ["Triangle (Trikonasana)", "Half Moon (Ardha Chandrasana)", "Downward Dog (Mukhasana)", "Mountain (Tadasana)"],
        questionValue: 2,
        correct: 2,
        answerText: "Downward Dog (Mukhasana) – \"I enjoy freedom of movement, flexibility of thought.\""
    }, {
        question: "Pose 4 of 5",
        poseImage: '<img src="images/fish.png" alt="Pose 4" id="poseImage">',
        choices: ["Full Shoulderstand (Sarvangasana)", "Bridge (Setu Bandhasana)", "Cobra (Bhujangasana)", "Fish (Matsyasana)"],
        questionValue: 3,
        correct: 3,
        answerText: "Fish (Matsyasana) – \"I inhale Life's positive energy and exhale negativity.\""
    }, {
        question: "Pose 5 of 5",
        poseImage: '<img src="images/chair.png" alt="Pose 5" id="poseImage">',
        choices: ["Mountain (Tadasana)", "Chair (Utkatasana)", "Tree (Vrikshasana)", "Thunderbolt (Vajrasana)"],
        questionValue: 4,
        correct: 1,
        answerText: "Chair (Utkatasana) – \"I allow Life's energy to stream through me.\""
    }];

    var userAnswers = 0;
    var userAnswer = "";
    var i = 0;
    console.log("question" + i);

    /* $("#poseContainer").html(questions[i].poseImage); */
    $("#questionContainer").html(questions[i].question);
    $("#1stChoice").append(questions[i].choices[0]);
    $("#2ndChoice").append(questions[i].choices[1]);
    $("#3rdChoice").append(questions[i].choices[2]);
    $("#4thChoice").append(questions[i].choices[3]);
   
// Submit Answer Button

    $('body').on('click', '#submit', function () {
        var userAnswer = $("input[type='radio']:checked").val();
        
        if (userAnswer === undefined) {
            $("#answerContainer").html("Please select an option.");
         }

        else if (userAnswer == questions[i].correct) {
            console.log(userAnswer);
            console.log(questions[i].correct);
            console.log("CORRECT");
            $("#result").html("Correct!");
            userAnswers += 1;
            console.log(userAnswers);
            $("#answerContainer").html(questions[i].answerText);
            $("#submit").hide();
            $("#next").show();
            $("#answersCorrect").show();
            $("#answersCorrect").html("Questions answered correctly: " + userAnswers +" of 5");
                if (i === 4) {
                console.log("complete");
                $("#submit").hide();
                $("#restart").show();
                $("#next").hide();
               }
            }
            else {
            console.log("incorrect");
            $("#result").html("Incorrect.");
            $("#answerContainer").html(questions[i].answerText);
            $("#submit").hide();
            $("#next").show();
                if (i === 4) {
                console.log("complete");
                $("#submit").hide();
                $("#restart").show();
                $("#next").hide();
                }
            }
    });

// Next Question Button

    $('body').on('click', '#next', function () {
        $('#submit').show();
        $("#next").hide();
        i = i + 1;
        console.log("question" + i);
        $("#poseContainer").html(questions[i].poseImage);
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
    });


// Play Again? Button

    $('body').on('click', '#restart', function () {
        $(this).hide();
        $("#next").hide();
        i = 0;
        userAnswers = 0;
        userAnswer = "";
        $("#poseContainer").html(questions[i].poseImage);
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
        $('#submit').show();
        $("#answersCorrect").html("");
    });

    $("#next").hide();
    $("#restart").hide();
    $("#answersCorrect").hide();
});