declare module '@qualweb/qw-page' {
  import { QWElement } from "@qualweb/qw-element";

  class QWPage {
    constructor(document: Document, window: Window);
    public getElement(selector: string): QWElement | null;
    public getElements(selector: string): Array<QWElement>;
    public getElementByID(id: string, elementQW: QWElement): QWElement | null;
    public getElementByAttributeName(name: string): QWElement | null;
    public processShadowDom(): void;
    public getPageRootElement(page: QWPage): QWElement | null;
    public getURL(): string;
    public getHTMLContent(): string;
    public getFocusedElement(): QWElement; 
    public changeToDefaultViewport(): void;
    public changeViewport(width: number, height: number): void;
  }

  export {
    QWPage
  };
}