import * as React from "react";
import { storiesOf } from "@storybook/react";

import ClientStepWatcher from "../articles/prosemirror-sync-1/components/ClientStepWatcher";
import {
  ClientStep,
  DBCollection,
  ServerStep,
  StepStatus,
} from "../articles/prosemirror-sync-1/types";
import ServerStepWatcher from "../articles/prosemirror-sync-1/components/ServerStepWatcher";

const stories = storiesOf("Prosemirror Collab", module);

const clientSteps: ClientStep[] = [
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.ACCEPTED,
    steps: [{ test: "test" }],
    version: 1,
  },
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.REJECTED,
    steps: [{ test: "test" }],
    version: 2,
  },
  {
    collection: DBCollection.ClientSteps,
    docId: "ee",
    pmViewId: 1,
    status: StepStatus.NEW,
    steps: [{ test: "test" }],
    version: 3,
  },
];

const serverSteps: ServerStep[] = [
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 1,
  },
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 2,
  },
  {
    collection: DBCollection.ServerSteps,
    docId: "ee",
    pmViewId: 1,
    step: { test: "test" },
    version: 3,
  },
];

stories.add("ClientStep watcher", () => (
  <ClientStepWatcher steps={clientSteps} />
));

stories.add("ServerStep watcher", () => (
  <ServerStepWatcher steps={serverSteps} />
));
