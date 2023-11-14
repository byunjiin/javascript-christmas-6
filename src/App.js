import { dateerror } from './Exception/DateError.js';
import { menuerror } from './Exception/MenuError.js';
class App {
  async run() {
    const errordate = await dateerror();
    const errormenu = await menuerror();
  }
}

export default App;
