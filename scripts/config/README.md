# Db config setup script

This script writes the necessary environment variables to the .env file.

## Setup

In order to use this script you have to install `gcloud` and `firebase-tools`.
Install firebase tools with `npm i -g firebase-tools`, and gcloud by following https://cloud.google.com/sdk/install.

Log in with `firebase login` and `gcloud auth login`.

Too see the available firebase projects:

```shell script
firebase projects:list
```

Then set the one you want to use with

```shell script
firebase use <projectId>
gcloud config set project <projectId>
```

If firebase service account key is required then set the `GET_SERVICE_ACCOUNT` key in the .env
file before running this script.

Run this script with `npm run script:getconfig`

## Troubleshooting

_IF_ the `getconfig` script fails, it might be that the `firebase-admin` service account
already has too many keys generated.
You can see it if the script throws an error with:

`ERROR: (gcloud.iam.service-accounts.keys.create) RESOURCE_EXHAUSTED: Maximum number of keys on account reached.`

If that's the case just delete a key ( delete the last one if you have to pick ):

1. Get the admin email from the script output `adminEmail: <adminEmail>`
2. Get the keys belonging to the admin email:

```shell script
gcloud iam service-accounts keys list --iam-account <adminEmail>
```

3. Get one of the keys ( the one with the last date ) and delete it with:

```shell script
gcloud iam service-accounts keys delete <keyId> --iam-account <adminEmail>
```

Be aware that key could belong to someone, in that case they should re-run the script
to generate a new key for them ( or just share `FIREBASE_SERVICE_ACCOUNT`
from the .env file ).
