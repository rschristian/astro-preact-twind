<h1 align="center">@rschristian/astro-preact-twind</h1>

<p align="center"><a href="https://docs.astro.build/en/guides/integrations-guide">Astro integration</a> for using <a href="https://preactjs.com">Preact</a> & <a href="https://twind.dev">Twind</a></p>

Better docs & background to come

## Usage

```bash
$ yarn add preact twind@next @rschristian/astro-preact-twind
```

> astro.config.js

```js
import { defineConfig } from 'astro/config';
import astroPreactTwind from '@rschristian/astro-preact-twind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        astroPreactTwind(),
    ],
});
```

Your config file will need to be located at `src/styles/twind.config.js`. I'll provide a proper API for configuring this at some point, but Astro makes this way more cumbersome than it should be.

## License

[MIT](https://github.com/rschristian/astro-preact-twind/blob/master/LICENSE)
