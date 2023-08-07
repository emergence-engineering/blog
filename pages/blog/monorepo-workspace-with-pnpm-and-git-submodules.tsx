import React from "react";

import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { ArticleIntro } from "../../features/article/types";
import Markdown from "../../features/article/components/Markdown";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import SalesBox from "../../features/article/components/SalesBox";
import ArticleHeader from "../../features/article/components/ArticleHeader";

export const articlePNPMMetadata: ArticleIntro = {
  title: "PNPM workspace with git submodules",
  author: "matejcsok",
  authorLink: null,
  introText: /* language=md */ `Manage your NPM package chaos with a monorepo using pnpm and git submodules.`,
  postId: "monorepo-workspace-with-pnpm-and-git-submodules",
  timestamp: 1691047433608,
  imgSrc:
    "https://emergence-engineering.com/monorepo-workspace-with-pnpm-and-git-submodules.png",
  url: "https://emergence-engineering.com/blog/monorepo-workspace-with-pnpm-and-git-submodules",
};

const MD0 = /* language=md */ `

## Introduction

We [ published ](https://emergence-engineering.com/open-source-projects) quite a few open-source packages on NPM. 
Developing multiple NPM packages that rely on each other is not easy task. There are a lot of ways that things can go wrong: keeping stuff in sync, publishing etc. 
We tried a couple of other tools to solve this problem: git repo npm modules, \`npm link\` and \`yalc\` so far but no of them was as good as \`pnpm\`.
Our go-to method now is a pnpm workspace monorepo with git submodules. Very convenient solution for projects with multiple separate git repositories.

## Features
- \`pnpm\` makes it convenient to manage and develop multiple separate packages without using any other tools like \`npm link\` or \`yalc\`
- easy to publish and takes care of updating dependencies using \`changeset\`
- recursively remove \`node_modules\`, \`dist\`, or build your projects

## How to use it
Follow this step-by-step guide on to create a \`pnpm\` monorepo with git submodules. All you need is a terminal.

### Setup pnpm
\`\`\`sg
# create a new directory and cd into it
mkdir mono-repo
cd mono-repo

# creates a package.json file
pnpm init

# creates an empty git repository
git init
\`\`\`
- do your usual setup (like add a \`.gitignore\` file etc.)

### Monorepo structure
in this example there will be 2 folders \`apps\` and \`packages\`
- \`apps\` for a \`create-react-app\`, which will consume packages
- \`packages\` for several git submodules, each of them is a separate git repo, which are reusable packages
- this structure can be defined in the \`pnpm-workspace.yaml\`

\`\`\`sh
# pnpm-workspace.yaml
packages:
  # executable/launchable applications
  - 'apps/*'
  # all packages in subdirs of packages/ and components/
  - 'packages/*'
  \`\`\`

### Git Submodules
add your submodules

\`\`\`sh
# add your submodules in the packages folder
cd packages
git submodule add https://github.com/<user>/rock rock

# this will tell git to download the contents of the submodules, if the folders are empty
git submodule update --init --recursive
\`\`\`
- keep in mind that submodules are still separate GitHub repositories
- review changes, commit and push inside the submodules
- the root of the project is also a git repository which sees each submodule as a particular commit hash
- when a submodule has a new commit, the new commit hash can be staged and committed in the root project, so everyone else sees that the particular submodule now points to a new commit hash

### Create react app
the following cra will live in the \`apps\` folder and will be part of the root, not a separate git repository
\`\`\`sh
cd apps
npx create-react-app example
\`\`\`

- the cool part of pnpm workspace is that the \`example\` react app can use the submodules as dependencies
- if the version numbers match, then the example app will use the built package from the \`packages\` folder, otherwise pnpm will fetch it from remote npm registry (if it is published), [workspace protocol](https://pnpm.io/workspaces#workspace-protocol-workspace)

### pnpm import
\`pnpm import\` generates a \`pnpm-lock.yaml\` from another package manager's lockfile
\`\`\`sh
# cd into a submodule
rm -rf node_modules
pnpm import
# now remove the other package managers lockfile

# go back to the root and install dependencies
pnpm install
\`\`\`

### [Release workflow](https://pnpm.io/workspaces#release-workflow)
Long story short, pnpm does not version packages so when the time comes to publish a submodule to npm, some other tool needs to be used for that
- luckily [changset](https://pnpm.io/using-changesets) takes care of it

\`\`\`sh
# add changeset in the root as devDependenc\
pnpm add -Dw @changesets/cli

# run the init command
pnpm changeset init

# generate a new changeset
# the following command will ask which packages should get a new version
pnpm changeset

# this will bump the versions previously specified with pnpm changeset
pnpm changeset version

# update lockfile and rebuild dependencies
pnpm install
\`\`\`

- changeset also takes care of the \`example\` React app, and if any of its dependencies has a new version, it will update the \`package.json\` version of that package

### running workspaces
- workspaces can be run separately with the [\`--filter\`](https://pnpm.io/filtering) command
- or all of them at once with the [\`--recursive\`](https://pnpm.io/cli/recursive) command

\`\`\`sh
# build only one project
pnpm --filter <package> run build

# run all of them at once
pnpm -r run build
\`\`\`

## Conclusion
- we use \`pnpm\` workspace in [suggestcat-repo](https://github.com/emergence-engineering/suggestcat-dev), \`suggestcat\` is a set of \`ProseMirror\` plugins, which gives AI suggestions
- with \`pnpm\` workspace we can develop \`suggestcat\` easily, because we have 4 different submodules which depend on each other, and our React app with the ProseMirror editor consumes all of those packages, without a monorepo we would have to publish to npm registry all the time we change something in any of the repos, or use \`npm link\` locally, which is quite cumbersome, or some other tools like \`yalc\` which seemed to be working just fine for the first time, but with 4 packages it needed to be restarted all the time
`;

const Article = () => (
  <ArticleWrapper>
    <ArticleShareOgTags
      url={articlePNPMMetadata.url}
      title={articlePNPMMetadata.title}
      description={articlePNPMMetadata.introText}
      imgSrc={articlePNPMMetadata.imgSrc}
    />
    <ArticleHeader
      title={articlePNPMMetadata.title}
      author={articlePNPMMetadata.author}
      timestamp={articlePNPMMetadata.timestamp}
    />
    <Markdown source={MD0} />
    <SalesBox />
  </ArticleWrapper>
);
export default Article;
