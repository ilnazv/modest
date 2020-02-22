import appHtml from './app.html';
import '../test';

const actionAttributeSelector = "data-action";
const testIdSelector = "data-test-id";

export class App {
  constructor() {
    this.handleEvents();
    this.render();
  }

  handleEvents(): void {
    document.addEventListener("click", (event: Event): void => {
      const button = event.target as HTMLButtonElement;
      const hasAction = button.hasAttribute(actionAttributeSelector);
      if (!hasAction) {
        return;
      }
      const actionName = button.getAttribute(actionAttributeSelector);
      const id = button.hasAttribute(testIdSelector) && button.getAttribute(testIdSelector);
      const newEvent = new CustomEvent(actionName, {
        detail: {
          id
        }
      });
      document.dispatchEvent(newEvent);
    });
  }

  render(): void {
    const contentEl = document.querySelector('#content');
    const appEl = document.createElement('div');
    appEl.innerHTML = appHtml;
    contentEl.appendChild(appEl);
  }
}

new App();