## ccap-dev

A fork from [ccap](https://github.com/DoubleSpout/ccap).

More simple to set additional parameters.

### Install

``` bash
$ npm install ccap-dev
```

### Additional Parameters

- textLen

  Length of captcha text.

  *Default to 6.*

- noiseType

  Type of additive noise.
  0: Gaussian
  1: Uniform
  2: Salt and Pepper
  3: Poisson
  4: Rician

  *Default to 2.*

- noiseSigma

  Amplitude of the random additive noise.

  *Default to 1.*

### Example

You can define captcha like this:

``` javascript
var ccap = require('ccap-dev')({
  width: 120,
  height: 36,
  offset: 24,
  quality: 100,
  fontSize: 24,
  textLen: 5,
  noiseType: 2,
  noiseSigma: 1
});
```

More usages: [ccap](https://github.com/DoubleSpout/ccap)

### License

MIT
