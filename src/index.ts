import "./style.scss";
import './test/test';

const actionAttributeSelector = 'data-action';
const testIdSelector = 'data-test-id';

function initialize(): void {
    document.addEventListener('click', (event: Event): void => {
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

initialize();