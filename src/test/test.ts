import layoutHtml from './test.html';

export class TestsController {
  constructor() {
    document.addEventListener("start-test", (event: CustomEvent) => {
      const id = event.detail.id;
      this.startTest(id);
    });
  }

  startTest(id: string): void {
    if (!id) {
      throw new Error("Id is not defined");
    }
    this.renderTestLayout();
    history.pushState({}, 'Tests', 'tests');
    console.log("start-test: ", id);
  }

  renderTestLayout(): void {
    const layout = document.createElement('div');
    layout.innerHTML = layoutHtml;
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(layout);
  }
}

new TestsController();
