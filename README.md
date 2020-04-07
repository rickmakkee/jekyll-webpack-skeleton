# Jekyll Webpack skeleton

A Jekyll skeleton project with Webpack to compile javascript and scss

### Setup your environment

#### Install Node.js

[Node.js](https://nodejs.org/en/) allows you to run JavaScript code on a server, This project uses Node.js
so you'll need to make sure you have a recent version installed on your computer.

##### Using Homebrew on MacOS, Linux or Windows 10.

1. Make sure you have the latest version of [homebrew](https://brew.sh/) installed.

2. Open up the terminal.

3. Run the following command to install Node.js.

   ```bash
   brew install node
   ```

##### Alternative instructions

Alternatively you can [download the LTS installer package](https://nodejs.org/en/download/) from the
Node.js website and follow the installation steps.

#### Install Yarn

Use [Yarn](https://yarnpkg.com/) for dependency management. So to make sure all dependencies
are correct you will need to install it.

##### Using Homebrew on MacOS, Linux or Windows 10.

1. Open up the terminal.

2. Run the following command to install Yarn

   ```bash
   brew install yarn
   ```

##### Alternative instructions

You can find alternative install instructions on the
[Yarn website](https://yarnpkg.com/en/docs/install).

#### Install Jekyll

Jekyll is a Ruby Gem and requires Ruby. See [these](https://jekyllrb.com/docs/installation/) instructions to install Ruby.

After you made sure you have the right Ruby version install the
[Bundler](https://jekyllrb.com/docs/ruby-101/#bundler) Gem globally by running the following command:

```bash
gem install bundler
```

After installing Bundler run the following command in the project root to install all project specific Gems:

```bash
bundle install
```

### Setup the project

#### Install dependencies

After downloading the source code we need to download all dependencies. Simply install them by running the following command in the project root.

```bash
yarn
```

#### Running the development server

You can start it up by running the following commands in the root of your project.
Because this project uses Webpack and Jekyll you'll need to run 2 commands in separate terminal windows.

To run the webpack side:

```bash
yarn dev
```

And to run Jekyll:

```bash
yarn jekyll-dev
```

Once the server has started you can open your browser up at
[http://localhost:4000](http://localhost:4000/) to preview the build project.

### Create a distribution build

Once you have finished your project you will most likely want to create a build that can be used
in production. You can do this by running the following commands in the root of your project.

```bash
yarn build
```

Once that is finished run the Jekyll build:

```bash
yarn jekyll-build
```

Once this is done the `_site` folder will include the fully build website.
You can put the contents of this folder on a web server.

## Code quality

### Prettier

We use [Prettier](https://github.com/prettier/prettier) to format all our code. This is enabled for
`js` and `scss` files. The corresponding linters are configured to adhere to the rules
from prettier (so they won't conflict).

Prettier is configured to run on the `pre-commit` using `husky` and `lint-staged` hook, and can also
be manually invoked by:

```
yarn prettify
```

### Linting

The below tools are used to lint our code. They can be all executed by opening up the terminal in
the root of your project and running the following command:

```
yarn lint
```

#### eslint

We use [eslint](https://eslint.org/) to lint our JavaScript code. It's configured for use with
Prettier, and set up to understand Webpack imports. It follows the
[AirBnB styleguide](https://github.com/airbnb/javascript) with some super small tweaks.

To trigger eslint you should open up the terminal in the root of your project and run the following
command:

```
yarn lint:js
```

#### stylelint

We use [stylelint](https://stylelint.io/) to lint our scss code.
It's configured for use with Prettier and uses stylelint-config-recommended-scss with minor modifications.

To trigger stylelint you should open up the terminal in the root of your project and run the following
command:

```
yarn lint:css
```

### Pre-commit hook

To lint all code checked in to git, we use [husky](https://github.com/typicode/husky) to
configure git commit hooks. The `pre-commit` hook is configured to run
[lint-staged](https://github.com/okonet/lint-staged) on the files that are about to be committed.

It will run all linters on the appropriate files, and allows Prettier to reformat any code before
doing the actual commit.

You can also run the command manually in the root of your project:

```
yarn precommit
```

> **Note:** Keep in mind that some lint errors might pop up in files that are not updated by
> changing other things (like imports that are not correct after renaming a file), so it's good
> practice to run `yarn lint` once in while to verify the complete codebase is valid.


### Images/assets

Assets like images and fonts that are used in the scss files should be placed in the folder `_src/assets/`.
This folder is processed by webpack.

Other assets like image, videos and other documents that are used in the data files should be placed in the `static` folder.
This folder is not processed by webpack and is copied over to the build unprocessed.
