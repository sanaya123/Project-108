function Start_Classification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
if (error){
    console.error(error)
}else{
    console.log(results)
    random_number_r = Math.floor(Math.random()*255)+1
    random_numbermentById("sound_name").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
    document.getEle_b = Math.floor(Math.random()*255)+1
    random_number_g = Math.floor(Math.random()*255)+1
    document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("sound_name").innerHTML = "I can hear - " + results[0].label
    document.getElementById("accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"

    img1 = document.getElementById("dog","cat")

    if (results[0].label == "Bark"){
        img1.src = "dog"
    } else (results[0].label == "Meow")
        img1.src = "cat"
    {  
    }
}
}