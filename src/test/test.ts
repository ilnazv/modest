export class TestsController {
    constructor() {
        document.addEventListener('start-test', (event: CustomEvent) => {
            const id = event.detail.id;
            console.log('start-test: ', id);
        });
    }
}

new TestsController();