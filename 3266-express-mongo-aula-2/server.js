import "dotenv/config";//colocar ela no maior alto nível da aplicação
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!",PORT);
});
