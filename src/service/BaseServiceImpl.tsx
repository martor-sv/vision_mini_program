import ServiceOption from "./ServiceOption";

export default class BaseServiceImpl {
  getOption() {
    return new ServiceOption();
  }

}
