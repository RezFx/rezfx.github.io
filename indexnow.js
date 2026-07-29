const payload = {
  host: "rezfx.github.io",
  key: "015d30169a494eaba0ef20581594f1ed",
  urlList: [
    "https://rezfx.github.io/renzofanutti.github.io/",
    "https://rezfx.github.io/AudioYlem/",
    "https://rezfx.github.io/lilyspuff.github.io/"
  ]
};

async function submitToIndexNow() {
  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`Successo! Codice di stato: ${response.status}`);
    } else {
      console.error(`Errore! Codice di stato: ${response.status}`);
      const text = await response.text();
      console.error("Dettagli errore:", text);
    }
  } catch (error) {
    console.error("Errore di rete o dello script:", error);
  }
}

submitToIndexNow();
