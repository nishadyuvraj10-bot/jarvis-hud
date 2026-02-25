async function startJarvis() {
  const userInput = prompt("Ask Jarvis:");
  if (!userInput) return;

  const response = await fetch("/api/jarvis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  });

  const data = await response.json();
  document.getElementById("response").innerText = data.reply;
}
