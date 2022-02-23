declare module "@qualweb/qw-page" {
  interface CSSProperty {
    name: string;
    value: string;
    important: boolean;
    location: string;
    pointer: string;
  }

  interface PseudoSelectorProperty {
    [property: string]: CSSProperty;
  }

  interface MediaProperty {
    [property: string]: CSSProperty | PseudoSelectorProperty;
  }

  interface MediaProperties {
    [media: string]: MediaProperty | PseudoSelectorProperty;
  }

  interface CSSProperties {
    media: MediaProperties;
    [property: string]: CSSProperty | MediaProperties | PseudoSelectorProperty;
  }

  class QWNode {
    node: Node;
    elementsCSSRules?: Map<Node, CSSProperties>;

    constructor(node: Node, elementsCSSRules?: Map<Node, CSSProperties>);
    public getType(): string;
    public hasChildNodes(): boolean;
    public hasTextNode(): boolean;
    public isHTMLElement(): boolean;
    public previousSibling(): QWNode | null;
    public previousSiblings(): Array<QWNode>;
    public nextSibling(): QWNode | null;
    public nextSiblings(): Array<QWNode>;
    public getParentNode(): QWNode | null;
    convertToQWNode(node: Node): QWNode;
    toQWElementNode(): QWElementNode;
    toQWTextNode(): QWTextNode;
    toQWCommentNode(): QWCommentNode;
  }

  class QWElementNode extends QWNode {
    selector: string | undefined;
    constructor(
      node: Node | Element,
      elementsCSSRules?: Map<Node, CSSProperties>
    );
    public hasCSSRules(): boolean;
    public getCSSRules(): CSSProperties | undefined;
    public hasCSSProperty(
      property: string,
      pseudoStyle?: string,
      media?: string
    ): boolean;
    public getCSSProperty(
      property: string,
      pseudoStyle?: string,
      media?: string
    ): CSSProperty | undefined;
    public getCSSMediaRules(): MediaProperty | undefined;
    public getCSSPseudoSelectorRules(
      pseudoSelector: string
    ): PseudoSelectorProperty | undefined;
    public getComputedStyle(
      property: string,
      pseudoStyle: string | null
    ): string;
    public getText(): string | null;
    public getOwnText(): string | null;
    public hasNonEmptyTextNode(): boolean;
    public hasVisualTextContent(): boolean;
    public hasAttributes(): boolean;
    public hasAttribute(attribute: string): boolean;
    public hasChildren(): boolean;
    public getChildren(): Array<QWElementNode>;
    public hasChild(childName: string): boolean;
    public getParent(): QWElementNode | null;
    public hasParent(parentName: string): boolean;
    public getParentAllContexts(): QWElementNode | null;
    public getAttribute(attribute: string): string | null;
    public getAttributes(): { [attr: string]: string };
    public getAttributeNames(): Array<string>;
    public setAttribute(attribute: string, value: string): void;
    public find(selector: string): QWElementNode | null;
    public findAll(selector: string): Array<QWElementNode>;
    public findVisible(selector: string): QWElementNode | null;
    public findAllVisible(selector: string): Array<QWElementNode>;
    public shadowFind(selector: string): QWElementNode | null;
    public shadowFindAll(selector: string): Array<QWElementNode>;
    public previousElementSibling(): QWElementNode | null;
    public previousElementSiblings(): Array<QWElementNode>;
    public nextElementSibling(): QWElementNode | null;
    public nextElementSiblings(): Array<QWElementNode>;
    public getNumberOfSiblingsWithTheSameTag(): number;
    public getChildTextContent(childName: string): string | null;
    public concatAccessibleNames(aNames: Array<string>): string;
    public getElementReferencedByHREF(): QWElementNode | null;
    public getProperty(property: string): unknown;
    public getMediaDuration(): number | null;
    public hasMediaControls(): boolean | null;
    public isMediaMuted(): boolean | null;
    public isMediaWithAutoplay(): boolean | null;
    public videoHasAudio(): boolean;
    public getScrollHeight(): number;
    public getScrollWidth(): number;
    public getClientHeight(): number;
    public getClientWidth(): number;
    public getTagName(): string;
    public toString(withText: boolean, fullElement: boolean): string;
    public isOffScreen(): boolean;
    public getContentFrame(): Document | null;
    public focusElement(): void;
    public click(): void;
    public getBoundingBox(): DOMRect;
    public isVisible(): boolean;
    public isHidden(): boolean;
    public isInTheAccessibilityTree(): boolean;
    public isWidget(): boolean;
    public isDescendantOf(names: Array<string>, roles: Array<string>): boolean;
    public isDescendantOfExplicitRole(
      names: Array<string>,
      roles: Array<string>
    ): boolean;
    public allowsNameFromContent(): boolean;
    public getAccessibleName(): string | undefined;
    public getAccessibleNameSVG(): string | undefined;
    public getAccessibleNameSelector(): Array<string> | undefined;
    public getRole(): string | null;
    public getImplicitRole(accessibleName: string | undefined): string | null;
    public getValidExplicitRole(): string | null;
    public hasGlobalARIAPropertyOrAttribute(): boolean;
    public hasValidRole(): boolean;
    public getAriaOwner(): QWElementNode | null;
    public getLinkContext(): Array<string>;
    public getOwnerElement(): QWElementNode | null;
    public getOwnedElements(): Array<QWElementNode>;
    public getValueFromEmbeddedControl(): string;
    public isDataTable(): boolean;
    public isChildPresentational(): boolean;
    public isOfTypeControl(): boolean;
    public isFocusable(): boolean;
    public isReferencedByAriaLabel(): boolean;
    public isFocused(): boolean;
    public isPartOfSequentialFocusNavigation(): boolean;
    public getSelector(): string;
    getSelfLocationInParent(element: Element): string;
    noParentScrolled(offset: number): boolean;
    convertAllToQWElementNode(
      elements: NodeListOf<Element>
    ): Array<QWElementNode>;
    convertToQWElementNode(element: Element): QWElementNode;
    addCSSRulesPropertyToElement(element: Element): void;
  }

  class QWTextNode extends QWNode {
    constructor(node: Node, elementsCSSRules?: Map<Node, CSSProperties>);
    public getText(): string | null;
    public getWholeText(): string;
  }

  class QWCommentNode extends QWNode {
    constructor(node: Node, elementsCSSRules?: Map<Node, CSSProperties>);
    public getData(): string | null;
  }

  class QWPage {
    constructor(document: Document, addCSSRulesToElements?: boolean);
    public createQWNode(node: Node): QWNode;
    public createQWElementNode(element: Element): QWElementNode;
    public cacheValue(
      selector: string,
      method: string,
      value: string | undefined
    ): void;
    public getCachedValue(selector: string, method: string): string | undefined;
    public isValueCached(selector: string, method: string): boolean;
    public getURL(): string;
    public find(
      selector: string,
      specificDocument?: QWElementNode,
      documentSelector?: string
    ): QWElementNode | null;
    public findAll(
      selector: string,
      specificDocument?: QWElementNode,
      documentSelector?: string
    ): Array<QWElementNode>;
    public getElementById(id: string): QWElementNode | null;
    public getElementByAttributeName(name: string): QWElementNode | null;
    public getRootElement(page: QWPage): QWElementNode | null;
    public toString(): string;
    public getFocusedElement(): QWElementNode | null;
    public cleanAllElements(): void;
  }

  export {
    QWPage,
    QWNode,
    QWElementNode,
    QWTextNode,
    QWCommentNode,
    CSSProperty,
    PseudoSelectorProperty,
    MediaProperty,
    MediaProperties,
    CSSProperties,
  };
}
