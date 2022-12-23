# Ztrain automation framework playwright

## Requirement

### install dependency

```bash
$ yarn install

or

$ npm install
```

### Run test

```bash
$ yarn test

or

$ npm run test
```

### Run test specific scenario

```bash
$ yarn test --tags "@login"
```

### Run test specific two or multiple specific scenario

```bash
$ CUCUMBER_FILTER_TAGS="@login and @register" yarn test
```

### Run test specific specific browser

```bash
$ BROWSER=firefox yarn test
```

### Run two test to different browser

```bash
$ BROWSER=firefox yarn test --tags "@login" && BROWSER=webkit yarn test --tags "@register"
```

### Generate allure report

```bash
$ yarn allure
```
