# Setting up the Local Development Environment

## Prerequisites

Ensure the following are installed:

- [Postgres](https://www.postgresql.org/)
- [asdf](https://asdf-vm.com/)

## Repository and Version Control

- Ensure you have push access (most likely by being added to the **@bcgov/cas-developers** GitHub team) to [bcgov/cas-cif](https://github.com/bcgov/cas-cif).
- Ensure you have [GPG commit signing](https://docs.github.com/en/github/authenticating-to-github/signing-commits) set up on your local environment.
  - First, ensure your `git config user.email` is set to the email address you want to use for signing.
  - You can verify it's working when you commit to a branch and the signature is indicated by `git log --show-signature`. Once pushed, a "Verified" badge appears next to your commits on GitHub.
- Clone a local copy of [bcgov/cas-reporting](https://github.com/bcgov/cas-reporting).

## App Environment Variables

In both the `client` and `server` directories, create a `.env` file and copy the contents of `.env.example` file of the respective directory into it. See the 1Password vault for the values.

## Backend Environment Setup

1. Navigate to folder: `cas-reporting/server`.
2. Copy/Paste the `.env.example` file and rename it `.env`.
3. Complete the .env file values reflecting the 1Password vault document `OBPS backend ENV`.
4. Run `make install_dev_tools`. This will install asdf plugins, poetry and activate the poetry virtual environment (to get into the environment again after setup, run `poetry shell`). To exit the shell run `exit`.
5. Run `make install_poetry_deps` to install all python dependencies.
6. Run `make start_pg` to start the postgres server if it is not already running.
7. Run `make create_db` to create the database.
8. Run `make migrate` to run all database migrations.
9. Run `make run`, which will start running the development server locally (default port is :8000; terminal output will indicate what localhost address to use to access the backend server).
   - to test it out, navigate to the `/api/docs` endpoint in your browser, you should see documentation for the /add endpoint
   - navigate to the `api/add?a=4&b=2` endpoint in your browser, which should return as a result the sum of the specified values for a and b.
10. Optional: to test the Django server's connection to your database, run `python3 manage.py check --database default`

## Backend Environment Use

After doing the initial setup, to get the backend re-running:

1. From the `cas-reporting/server` directory, run `poetry shell`
2. To set up the database:
   - If you want to drop and recreate the database with mock data, run `make reset_db`. (Warning: This will delete superusers and you will have to recreate with `make superuser`.)
   - If you want to keep your existing database and update (e.g. after a rebase)
     - If there are new migrations, run `make migrate`. (Or, because we're pre-production, you can delete the existing migrations, run `make migrations` and then `make migrate`)
     - If there are new fixtures, `run python manage.py loaddata <path-to-fixture>``
3. Run `make run`

### Troubleshooting

- There might be an error where postgres is only installed with the `postgres` user and not your local user.
  To address this, in a terminal, enter:

```bash
$> sudo -u postgres createuser -s -i -d -r -l -w <<your_local_user>>
$> sudo -u postgres createdb <<your_local_user>>
```

- if running poetry commands throws errors about the `_hashlib` library, [try these troubleshooting commands](https://github.com/python-poetry/poetry/issues/7695#issuecomment-1572825140)
- if you encounter an issue installing `psycopg2` relating to `Error: pg_config --libdir failed: No version is set for command pg_config`, try setting your Postgres version for asdf globally rather than locally. (E.g., `asdf global postgres 14.0`)
- if your admin panel looks ugly, run `python3 manage.py collectstatic` to collect static files and then try again.

## Frontend Environment Setup

In the `client` directory:

1. To install depedencies: `yarn`
2. To run the development server: `yarn dev`
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## VS-Code optional setup

If you would like VS-Code to utilize Black to format your Python code automatically, you can add the following to your local settings at `.vscode/settings.json`. If these are your only settings, you'll need to add curly braces wrapping the whole block. These settings also add Pytest to the testing frameworks available to VS-Code.

```json
  "[python]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "ms-python.black-formatter"
  },
  "black-formatter.importStrategy": "fromEnvironment",
  "python.testing.pytestArgs": [
      "server"
  ],
  "python.testing.unittestEnabled": false,
  "python.testing.pytestEnabled": true
```

## Pre-Commit

TODO: Add pre-commit

## Commit Message Conventions

TODO: Add gitlint

This project follows the commit message conventions outlined by [Conventional Commits](https://www.conventionalcommits.org/). Besides the standard commit types (message prefixes) **feat** and **fix**, we use some other types described there based on the Angular convention; some common ones among those are **test**, **docs**, **chore** and **refactor**. You can find the configuration details in the [.gitlint](../.gitlint) file

We also extend this prefix convention to the naming of **branches**, eg: `docs/add-readme` or `feat/some-feature`.
