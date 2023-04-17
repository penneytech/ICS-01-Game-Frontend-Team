export default function loginFail(message) {
    console.log("Received message:", message);
    let loginMessageDiv = document.getElementById('loginmessagediv');
    loginMessageDiv.innerHTML = message;
}