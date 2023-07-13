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
- package will be placed to the `<ROOT>/components` directory.

You can select type of styles which will use your package: plain CSS, [PostCSS](https://postcss.org/),
[Sass](https://sass-lang.com/), or [vanilla-extract](https://vanilla-extract.style/).

Our build system supports any of them without additional configuration, but selection of styles platform on generation
step will generate you different files.

#### `scaffold:hook`

Generates a new React hook package:

- package will have `use-` prefix;
- package will be placed to the `<ROOT>/hooks` directory.

#### `scaffold:library`

Generates a new library package:

- package will have no additional prefix;
- package will be placed to the `<ROOT>/libraries` directory.

### Templates

Template files of the scaffold located in the `<ROOT>/.scaffold` directory.

### Configuration

You can configure generators and add a new one generator in the `<ROOT>/plopfile.js`.

See more [here](https://plopjs.com/documentation/).
