import {injectable} from "inversify";

@injectable()
export class BasePresenter<V> {

  private view: V

  public attach(view: V) {
    this.view = view
  }

  public dettach() {
    this.view = null;
  }

  protected getView(): V {
    return this.view;
  }
}
