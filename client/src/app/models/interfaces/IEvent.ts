type Keys<T> = keyof T;

interface Actions {
  instrument: InstrumentActions;
}
interface InstrumentActions {
  addInstrument: {
    type: 'addInstrument';
    payload: number;
  };
  removeInstrument: {
    type: 'removeInstrument';
    payload: number;
  };
}

type IAction<T, K extends Keys<T> = Keys<T>> = T[K];

export interface IEvent<T extends Keys<Actions> = Keys<Actions>> {
  type: T;
  action: IAction<Actions[T]>;
}
