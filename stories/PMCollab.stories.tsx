import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
  ClientStep,
  DBCollection,
  ServerStep,
  StepStatus,
} from "../articles/prosemirror-sync-1/types";
import ClientStepWatcher from "../articles/prosemirror-sync-1/components/ClientStepWatcher";
import ServerStepWatcher from "../articles/prosemirror-sync-1/components/ServerStepWatcher";

const stories = storiesOf("Prosemirror Collab", module);

function* generateDate(): Generator<number> {
  const baseDate = Date.now();
  // eslint-disable-next-line no-plusplus
  for (let i = 1; true; i++) {
    yield baseDate + i;
  }
}

const clientSteps: ClientStep[] = [
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.ACCEPTED,
    steps: [{ test: "test" }],
    version: 1,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.REJECTED,
    steps: [{ test: "test" }],
    version: 2,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.NEW,
    steps: [{ test: "test" }],
    version: 3,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
];

const serverSteps: ServerStep[] = [
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 1,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 2,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 3,
    createdAt: generateDate().next().value,
    updatedAt: generateDate().next().value,
  },
];

stories.add("ClientStep watcher", () => (
  <ClientStepWatcher steps={clientSteps} />
));

stories.add("ServerStep watcher", () => (
  <ServerStepWatcher steps={serverSteps} />
));
