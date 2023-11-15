import { beforetotal } from './Event/BeforeTotal.js';
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
    const sum = beforetotal(stringmenu, numbermenu);
    OutputView.printBeforeTotal(sum);
    OutputView.printChampagne(sum);
    OutputView.printSumList(errordate, sum, errormenu);
    OutputView.printSumMoney();
    OutputView.printAfterTotal();
    OutputView.printBadge();
  }
}

export default App;
