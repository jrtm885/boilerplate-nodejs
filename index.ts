import { Container } from "typedi";
import { Initializer } from "./src/setup/Initializer";
import { defaultLogger} from './src/utils/LoggerUtil';


try {
  (async () => {
    try {
      const initializer = Container.get<Initializer>(Initializer);
      initializer.configure();      
      defaultLogger.info('MS-Security listen');
    } catch (error) {
      defaultLogger.error(error);
      throw error;
    }
  })();
} catch (error) {
  defaultLogger.error(error);
}
