// VARIABLES
    }


    // MENSAJE USUARIO

    const userDiv = document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerText = question;

    chatBox.appendChild(userDiv);


    // RESPUESTA IA

    const aiDiv = document.createElement("div");

    aiDiv.classList.add("ai-message");

    aiDiv.innerText = "Escribiendo...";

    chatBox.appendChild(aiDiv);


    // SCROLL

    chatBox.scrollTop = chatBox.scrollHeight;


    setTimeout(() => {

        const response = generateAIResponse(question);

        aiDiv.innerText = response;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);


    userQuestion.value = "";

});


// ENTER PARA ENVIAR

userQuestion.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        document.getElementById("sendQuestionBtn").click();

    }

});


// INICIALIZAR

updateProgress();
