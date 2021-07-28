declare module "@qualweb/util" {
  import { QWElementNode } from "@qualweb/qw-page";

  interface AriaAttributesRoles {
    [attribute: string]: {
      global: string;
      typeValue: string;
      values: string | Array<string>;
      defaultValue: string;
    };
  }

  interface Roles {
    [role: string]: {
      baseConcept: string | Array<string>;
      attribute: string | Array<string>;
      requiredContextRole: string | Array<string>;
      requiredAria?: string | Array<string>;
      requiredRoles?: string | Array<string>;
      supportedAria?: string | Array<string>;
      supportedRoles?: string | Array<string>;
      implicitValueRoles: Array<Array<string>>;
      requiredOwnedElements: any;
    };
  }

  interface Languages {
    [lang: string]: number;
  }

  class DomUtils {
    public static elementIdIsReferenced(
      element: QWElementNode,
      id: string,
      attribute: string
    ): boolean;
    public static getElementReferencedByHREF(
      element: QWElementNode
    ): QWElementNode | null;
    public static getVideoMetadata(element: QWElementNode): any;
    public static isHumanLanguage(text: string): boolean;
    public static getTextSize(
      font: string,
      fontSize: number,
      bold: boolean,
      italic: boolean,
      text: string
    ): number;
    public static isElementADescendantOf(
      element: QWElementNode,
      names: Array<string>,
      roles: Array<string>
    ): boolean;
    public static isElementADescendantOfExplicitRole(
      element: QWElementNode,
      names: Array<string>,
      roles: Array<string>
    ): boolean;
    public static isElementHidden(element: QWElementNode): boolean;
    public static isElementHiddenByCSS(element: QWElementNode): boolean;
    public static isElementHiddenByCSSAux(element: QWElementNode): boolean;
    public static isElementVisible(element: QWElementNode): boolean;
    public static videoElementHasAudio(element: QWElementNode): boolean;
    public static elementHasContent(
      element: QWElementNode,
      checkChildren: boolean
    ): boolean;
    public static getTrimmedText(element: QWElementNode): string;
    public static objectElementIsNonText(element: QWElementNode): boolean;
  }

  class AccessibilityUtils {
    public static ariaAttributesRoles: AriaAttributesRoles;
    public static roles: Roles;
    public static languages: Languages;
    public static isElementChildPresentationalAux(
      element: QWElementNode
    ): boolean;
    public static isElementChildPresentational(element: QWElementNode): boolean;
    public static isFocusableBrowser(element: QWElementNode): boolean;
    public static isElementFocusable(element: QWElementNode): boolean;
    public static isElementFocusableByDefault(element: QWElementNode): boolean;
    public static elementHasGlobalARIAPropertyOrAttribute(
      element: QWElementNode
    ): boolean;
    public static getAccessibleNameRecursion(
      element: QWElementNode,
      recursion: boolean,
      isWidget: boolean
    ): string | undefined;
    public static getLinkContext(element: QWElementNode): Array<string>;
    public static allowsNameFromContent(element: QWElementNode): boolean;
    public static elementHasValidRole(element: QWElementNode): boolean;
    public static getElementValidExplicitRole(
      element: QWElementNode
    ): string | null;
    public static getAccessibleName(element: QWElementNode): string | undefined;
    public static getAccessibleNameSelector(
      element: QWElementNode
    ): Array<string> | undefined;
    public static getAccessibleNameSVG(
      element: QWElementNode
    ): string | undefined;
    public static getDefaultName(element: QWElementNode): string;
    public static getDisabledWidgets(): Array<QWElementNode>;
    public static getElementRole(element: QWElementNode): string | null;
    public static getElementRoleAName(
      element: QWElementNode,
      aName: string | undefined
    ): string | null;
    public static getValueFromEmbeddedControl(element: QWElementNode): string;
    public static isDataTable(element: QWElementNode): boolean;
    public static isElementControl(element: QWElementNode): boolean;
    public static isElementInAT(element: QWElementNode): boolean;
    public static isElementReferencedByAriaLabel(
      element: QWElementNode
    ): boolean;
    public static isElementWidget(element: QWElementNode): boolean;
    public static getImplicitRole(
      element: QWElementNode,
      accessibleName: string | undefined
    ): string | null;
    public static getOwnerElement(element: QWElementNode): QWElementNode | null;
    public static isPartOfSequentialFocusNavigation(
      element: QWElementNode
    ): boolean;
    public static getAriaOwner(element: QWElementNode): QWElementNode | null;
    public static getOwnedElements(
      element: QWElementNode
    ): Array<QWElementNode>;
  }

  export { AriaAttributesRoles, Roles, DomUtils, AccessibilityUtils };
}
