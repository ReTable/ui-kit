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

2. *Optional*. Install `nodejs` and `pnpm` with `asdf`:

   ```shell
   asdf install
   ```

3. Setup all dependencies and packages.

   ```shell
   pnpm install
   ```

## Scaffold

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
