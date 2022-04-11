import { h, Component as BaseComponent } from 'preact';
import render from 'preact-render-to-string';
import{ extract, install } from 'twind';

const cwd = process.cwd();
const { default: twindConfig } = await import(`${cwd}/src/styles/twind.config.js`);

const tw = install(twindConfig, process.env.NODE_ENV === 'production');

function check(Component, props, children) {
    if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return BaseComponent.isPrototypeOf(Component);
	}

	try {
		const { html } = renderToStaticMarkup(Component, props, children);
		if (typeof html !== 'string') {
			return false;
		}

		// There are edge cases (SolidJS) where Preact *might* render a string,
		// but components would be <undefined></undefined>

		return !/\<undefined\>/.test(html);
	} catch (err) {
		return false;
	}
}

function renderToStaticMarkup(Component, props, children) {
    const result = render(
        h(Component, props, children != null ? h(StaticHtml, { value: children }) : children)
    );
    const { html, css } = extract(result, tw);
    return { html: `<style data-twind>${css}</style>${html}` };
}

export default {
	check,
	renderToStaticMarkup,
}
