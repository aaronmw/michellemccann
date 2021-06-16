const select = (selector, rootElement = document) =>
    rootElement.querySelector(selector);

const selectAll = (selector, rootElement = document) =>
    Array.from(rootElement.querySelectorAll(selector));

const scrollingElement = select('body');
const headerElement = select('.js-sticky-header');
const headerElementHeight = { current: headerElement.clientHeight };
const placeholderWhenStickied = document.createElement('div');

placeholderWhenStickied.style.height = `${headerElementHeight.current}px`;

headerElement.after(placeholderWhenStickied);

const handleScroll = () => {
    const scrollDistanceThreshold = 100;
    const { top } = scrollingElement.getBoundingClientRect();

    headerElementHeight.current = Math.max(
        headerElement.clientHeight,
        headerElementHeight.current
    );

    placeholderWhenStickied.style.height = `${headerElementHeight.current}px`;

    if (top < scrollDistanceThreshold * -1) {
        scrollingElement.classList.add('is-window-scrolled');
    } else {
        scrollingElement.classList.remove('is-window-scrolled');
    }
};

handleScroll();

setInterval(handleScroll, 250);
