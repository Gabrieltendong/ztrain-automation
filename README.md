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

### Run two or multiple specific scenario

```bash
$ CUCUMBER_FILTER_TAGS="@login and @register" yarn test
```

### Run test to specific browser

```bash
$ BROWSER=firefox yarn test
```

### Run two test to different browser

```bash
$ BROWSER=firefox yarn test --tags "@login" && BROWSER=webkit yarn test --tags "@register"
```

### Run test on headless mode

```bash
$ HEADLESS=true yarn test --tags "@login"
```

### Generate allure report

```bash
$ yarn allure
```
