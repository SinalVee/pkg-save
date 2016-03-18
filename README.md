# pkg-save

Save installed package(s) to package.json.

Sometimes, I install a npm package but forgot to add `--save` or `--save-dev`. What should I do if I want to save this package to `package.json`?

I try to google it but no answer found. So, I write `pkg-save` to do it.

## Install

`npm install pkg-save -g`

## Usage

`pkg-save <name> [option]`

### Options

```
-d, --dev      Save package to devDependencies
-h, --help     Show help
-v, --version  Show version number
```
### Examples

```
pkg-save lodash              Save lodash to dependencies
pkg-save lodash --dev        Save lodash to devDependencies
pkg-save lodash mocha        Save lodash and mocha to dependencies
pkg-save lodash mocha --dev  Save lodash and mocha to devDependencies
```

## License

MIT
