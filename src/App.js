import { menuoutput } from './Event/MenuOutput.js';
import { dateerror } from './Exception/DateError.js';
import { menuerror } from './Exception/MenuError.js';
import OutputView from './OutputView.js';
class App {
  async run() {
    OutputView.printStart();
    const errordate = await dateerror();
    const errormenu = await menuerror();
    const [stringmenu, numbermenu] = menuoutput(errormenu);
    OutputView.printDate(errordate);
    OutputView.printMenu(errormenu, stringmenu, numbermenu);
    OutputView.printBeforeTotal();
    OutputView.printChampagne();
    OutputView.printSumList();
    OutputView.printSumMoney();
    OutputView.printAfterTotal();
    OutputView.printBadge();
  }
}

export default App;
