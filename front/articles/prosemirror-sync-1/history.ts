import { DBSI, DBSchema, ClientStep, ServerStep, DBCollection } from "./types";

enum StepHistoryActionType {
  "ADD_SERVER_STEP",
  "ADD_CLIENT_STEP",
}

interface ServerStepAction {
  type: StepHistoryActionType.ADD_SERVER_STEP;
  payload: ServerStep;
}

interface ClientStepAction {
  type: StepHistoryActionType.ADD_CLIENT_STEP;
  payload: ClientStep;
}

export type StepHistoryAction = ClientStepAction | ServerStepAction;

export interface StepHistoryState {
  client: ClientStep[];
  server: ServerStep[];
}

export async function fetchStepHistory(
  DBS: DBSI | undefined,
  setHistoryListener: (listener: PouchDB.Core.Changes<DBSchema>) => void,
  dispatchHistoryAction: (action: StepHistoryAction) => void,
  historyListener?: PouchDB.Core.Changes<DBSchema>,
) {
  if (!DBS) return;
  if (!historyListener) {
    const listener = DBS.serverDB.changes({
      since: "now",
      live: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      include_docs: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
    });
    setHistoryListener(listener);
    listener.on("change", (data) => {
      if (data?.doc?.collection === DBCollection.ServerSteps)
        dispatchHistoryAction({
          type: StepHistoryActionType.ADD_SERVER_STEP,
          payload: data.doc,
        });
      if (data?.doc?.collection === DBCollection.ClientSteps)
        dispatchHistoryAction({
          type: StepHistoryActionType.ADD_CLIENT_STEP,
          payload: data.doc,
        });
    });
  }
  // if (historyListener) {
  //   // In a real time environment the doc should only be fetched once, thus the listener should be cancelled
  //   // historyListener.cancel();
  // }
}

export const defaultHistoryState: StepHistoryState = {
  client: [],
  server: [],
};

type Step = ClientStep | ServerStep;

function sortSteps<Item extends Step>(a: Item, b: Item): number {
  return a.updatedAt - b.updatedAt;
}

function getLast10Steps<Item extends Step>(array: Item[]): Item[] {
  const { length } = array;
  const sorted = array.sort(sortSteps);
  return length < 10 ? sorted : sorted.slice(length - 10);
}

export function stepHistoryReducer(
  state = defaultHistoryState,
  action: StepHistoryAction,
): StepHistoryState {
  switch (action.type) {
    case StepHistoryActionType.ADD_CLIENT_STEP:
      return {
        server: state.server,
        client: getLast10Steps([...state.client, action.payload]),
      };
    case StepHistoryActionType.ADD_SERVER_STEP:
      return {
        client: state.client,
        server: getLast10Steps([...state.server, action.payload]),
      };
    default:
      return state;
  }
}
