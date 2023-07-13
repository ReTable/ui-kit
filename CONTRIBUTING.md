# Contributing Guide

- [Set up the project](#set-up-the-project)
- [Making a pull request](#making-a-pull-request)
- [Creating a new package](#creating-a-new-package)

## Set up the project

We use fixed [nodejs](https://nodejs.org/) and [pnpm](https://pnpm.io/) versions for development. You can install them
manually or use [asdf](https://asdf-vm.com/).

### Optional: How to configure `asdf` for project?

1. Install `asdf`. You can read about it [here](https://asdf-vm.com/guide/getting-started.html).

2. Install plugin for `nodejs`.

   ```shell
   asdf plugin add nodejs
   ```

3. Install plugin for `pnpm`.

   ```shell
   asdf plugin add pnpm
   ```

### Setting up

1. Clone repository locally:

   ```shell
   git clone git@github.com:ReTable/ui-kit.git
   cd ui-kit
   ```

2. _Optional_. Install `nodejs` and `pnpm` with `asdf`:

   ```shell
   asdf install
   ```

3. Setup all dependencies and packages.

   ```shell
   pnpm install
   ```

## Making a pull request

Before you make a pull request read the following information.

### Commit convention

We use commit conventions. When you create a commit we kindly ask you to follow the convention
`category<(package)>: message` in your commit message while using one of the following categories:

- `feat`: all changes that introduce completely new code or new features;
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present);
- `refactor`: any code related change that is not a fix nor a feature;
- `perf`: all changes regarding performance improvements;
- `test`: all changes regarding tests (adding new tests or changing existing ones);
- `build`:all changes regarding the build of the software, changes to dependencies or the addition of new dependencies;
- `ci`: all changes regarding the configuration of continuous integration (i.e. Github Actions, CI system);
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage or a lib or cli usage);
- `style`: all changes that do not affect the meaning of the code (i.e. white spaces, formatting, missing semi-colons);
- `chore`: all changes to repository that do not fit into any of the above categories.

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/ or check out the
Angular Commit Message Guidelines.

### Steps to PR

1. Create a new branch out of the `main` branch. We follow the convention `[type/scope]`. For example,
   `feat/button-icon-support` or `docs/cli-typo`. `type` can be any conventional commit type.
2. Make and commit your changes following the [commit convention](#commit-convention). As you develop, you can run
   `pnpm build --filter <package>` and `pnpm test --filter <package>` to make sure everything works as expected.
3. Run `pnpm changeset` to create a detailed description of your changes. This will be used to generate a changelog
   when we publish an update.
   [Learn more about Changesets](https://github.com/changesets/changesets/tree/main/packages/cli).

> If you made minor changes like CI config, prettier, etc., you can run `pnpm changeset add --empty` to generate an
> empty changeset file to document your changes.

## Creating a new package

We uses [plop](https://plopjs.com/) to provide scaffold of new packages.

### Commands

You can use scaffold in following way:

```shell
pnpm scaffold:<type>
```

#### `scaffold:component`

Generates a new React component package:

- package will have `ui-` prefix;
- package will be placed to the `components` directory.

You can select type of styles which will use your package: plain CSS, [PostCSS](https://postcss.org/),
[Sass](https://sass-lang.com/), or [vanilla-extract](https://vanilla-extract.style/).

Our build system supports any of them without additional configuration, but selection of styles platform on generation
step will generate you different files.

#### `scaffold:hook`

Generates a new React hook package:

- package will have `use-` prefix;
- package will be placed to the `hooks` directory.

#### `scaffold:library`

Generates a new library package:

- package will have no additional prefix;
- package will be placed to the `libraries` directory.

### Templates

Template files of the scaffold located in the `.scaffold` directory.

Templates uses [Handlebars](https://handlebarsjs.com/) template engine.

### Configuration

You can configure generators and add a new one generator in the `plopfile.js`.

See more [here](https://plopjs.com/documentation/).
