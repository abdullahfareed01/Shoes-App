/**
 * A proxy that forwards form data to your Google Apps Script URL.
 */
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const url = "https://script.google.com/macros/s/AKfycbzKGWpoDuRQjaj9hSFcPj4MaOy6jOB2SpHEKUFXHB_5RwVnANAAXIU-pBsfSH0IZ4HerQ/exec"; // put your script URL
  const body = event.body;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const text = await res.text();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Proxy error",
    };
  }
};
