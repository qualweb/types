declare module "@qualweb/core" {
  import { WCAGOptions, WCAGTechniquesReport } from "@qualweb/wcag-techniques";
  import { DomData } from "@qualweb/dom";
  import { CrawlOptions } from "@qualweb/crawler";
  import { WappalyzerReport, WappalyzerOptions } from "@qualweb/wappalyzer";
  import { ACTRulesReport, ACTROptions } from "@qualweb/act-rules";
  import { BestPracticesReport, BPOptions } from "@qualweb/best-practices";
  import { generateEARLReport } from "@qualweb/earl-reporter";
  import {
    LaunchOptions,
    BrowserLaunchArgumentOptions,
    BrowserConnectOptions,
    Page,
    Viewport,
  } from "puppeteer";
  import { CounterReport } from "@qualweb/counter";
  import { Locale, Lang, TranslationObject } from "@qualweb/locale";

  interface Execute {
    wappalyzer?: boolean;
    act?: boolean;
    wcag?: boolean;
    bp?: boolean;
    counter?: boolean;
  }

  type LoadEvent =
    | "load"
    | "domcontentloaded"
    | "networkidle0"
    | "networkidle2";


  type PageCallback = (page: Page, url: string) => Promise<void> | void;

  /**
   * Basic interface for a Qualweb plugin. Plugins are useful when you need to
   * work on a page before letting Qualweb perform evaluation of its contents.
   */
  export interface QualwebPlugin {
    /**
     * Called *after* a Page object has been initialized but *before* it loads
     * a target URL and injects Qualweb.
     * Use cases include injecting cookies before page loads, setting the
     * user agent prior to loading the target URL, and even subscribing to
     * console events for diagnostic/logging purposes.
     */
    beforePageLoad?: PageCallback;

    /**
     * Called *after* navigating to a URL that should be evaluated, but before
     * the evaluation itself has been run.
     * Use cases include dismissing banners/popups and adding timer delays to
     * slow-loading pages, to guarantee content has loading prior to Qualweb's
     * evaluation.
     */
    afterPageLoad?: PageCallback;
  }

  interface QualwebOptions {
    url?: string;
    urls?: string[];
    file?: string;
    crawl?: string;
    html?: string;
    qualstate?: QualState;
    timeout?: number;
    maxParallelEvaluations?: number;
    log?: {
      console?: boolean;
      file?: boolean;
    };
    waitUntil?: LoadEvent | LoadEvent[];
    viewport?: PageOptions;
    validator?: string;
    report?: "earl" | "earl-a";
    translate?: Locale | Lang | TranslationObject;
    crawlOptions?: CrawlOptions;
    "save-name"?: string;
    execute?: Execute;
    wappalyzer?: WappalyzerOptions;
    "act-rules"?: ACTROptions;
    "wcag-techniques"?: WCAGOptions;
    "best-practices"?: BPOptions;
  }

  interface QualState {
    url?: String;
    waitTime?: number;
    maxStates?: number;
    numberOfProcesses? : number;
    viewport?: PageOptions;
    ignore?: QS_Ignore;
    interaction?: QS_Interaction;
  }

  interface QS_Ignore {
    idsCompare: [String];
    idsEvents: [String];
  }

  interface QS_Interaction {
    form: [QS_InteractionForm];
    inputs: [QS_InteractionInputs];
    directions: [QS_InteractionDirections];
  }

  interface QS_InteractionForm {
    form: {
      input: QS_InteractionFormInput;
      action: QS_InteractionFormAction;
      info: QS_InteractionFormInfo;
    };
  }

  interface QS_InteractionFormInput {
    input: [{}];
  }

  interface QS_InteractionFormAction {
    id: String;
    event: String;
  }

  interface QS_InteractionFormInfo {
    formId: String;
    wait: Number ;
  }

  interface QS_InteractionInputs {
    inputs: [QS_InteractionInputsData];
  }

  interface QS_InteractionInputsData {
    value: {};
    info?: QS_InteractionInputsInfo;
  }

  interface QS_InteractionInputsInfo {
    wait: Number;
  }

  interface QS_InteractionDirections {
    directions: [QS_InteractionDirectionsData];
  }

  interface QS_InteractionDirectionsData {
    action: [QS_InteractionDirectionsActions];
    info: QS_InteractionDirectionsInfo;
  }

  interface QS_InteractionDirectionsActions {
    values: {};
    action: QS_InteractionDirectionsActionsAction;
    info: QS_InteractionDirectionsActionsInfo;
  }

  interface QS_InteractionDirectionsActionsAction {
    id: String;
    event: String;
  }

  interface QS_InteractionDirectionsActionsInfo {
    wait: number;
  }

  interface QS_InteractionDirectionsInfo {
    crawl: "continue" | "stop";
    save: boolean;
  }

  interface Evaluator {
    name: string;
    description: string;
    version: string;
    homepage: string;
    date: string;
    hash: string;
    url?: Url;
    page?: {
      viewport: {
        mobile?: boolean;
        landscape?: boolean;
        userAgent: string;
        resolution?: {
          width?: number;
          height?: number;
        };
      };
      dom?: DomData;
    };
  }

  interface Url {
    inputUrl: string;
    protocol: string;
    domainName: string;
    domain: string;
    uri: string;
    completeUrl: string;
  }

  interface Metadata {
    passed: number;
    warning: number;
    failed: number;
    inapplicable: number;
  }

  interface Modules {
    wappalyzer?: WappalyzerReport;
    "act-rules"?: ACTRulesReport;
    "wcag-techniques"?: WCAGTechniquesReport;
    "best-practices"?: BestPracticesReport;
    counter?: CounterReport;
  }
  
  interface EvaluationReport {
    type?: "evaluation";
    system?: Evaluator;
    state?: State;
    states?: [State];
    metadata?: Metadata;
    modules?: Modules;
  }

  interface State {
    selector?: [Selector];
    dom?: DomData;
    metadata?: Metadata;
    modules?: Modules;
  }

  interface Selector {
    user: String;
    id: String;
    className: String;
    eventType: String;
    selector: String;
  }

  interface PageOptions {
    mobile?: boolean;
    landscape?: boolean;
    userAgent?: string;
    resolution?: {
      width?: number;
      height?: number;
    };
  }

  type Module =
    | "wappalyzer"
    | "act-rules"
    | "wcag-techniques"
    | "best-practices"
    | "counter"
    | "stateInfo";

  interface Evaluations {
    [url: string]: EvaluationReport;
  }

  interface PuppeteerPlugins {
    stealth?: boolean;
    adBlock?: boolean;
  }

  interface ClusterOptions {
    maxConcurrency?: number;
    timeout?: number;
    monitor?: boolean;
  }

  class Cluster {}

  /**
   * QualWeb engine - Performs web accessibility evaluations using several modules:
   * - act-rules module (https://github.com/qualweb/act-rules)
   * - wcag-techniques module (https://github.com/qualweb/wcag-techniques)
   * - best-practices module (https://github.com/qualweb/best-practices)
   */
  class QualWeb {
    /**
     * Chromium browser cluster.
     */
    private cluster?: Cluster;

    /**
     * Initializes puppeteer with given plugins.
     *
     * @param {PuppeteerPlugins} plugins - Plugins for puppeteer - supported: AdBlocker and Stealth.
     */
    constructor(plugins?: PuppeteerPlugins);

    /**
     * Starts chromium browser cluster.
     *
     * @param {ClusterOptions} clusterOptions - Options for cluster initialization.
     * @param {LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions} options - check https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#puppeteerlaunchoptions.
     */
    public start(
      clusterOptions?: ClusterOptions,
      puppeteerOptions?: LaunchOptions &
        BrowserLaunchArgumentOptions &
        BrowserConnectOptions
    ): Promise<void>;

    public use(plugin: QualwebPlugin): this;

    /**
     * Closes chromium browser.
     */
    public stop(): Promise<void>;

    /**
     * Evaluates given options.
     *
     * @param {QualwebOptions} options - Options of execution (check https://github.com/qualweb/core#options).
     * @returns List of evaluations.
     */
    public evaluate(options: QualwebOptions): Promise<Evaluations>;

    /**
     * Crawls a webpage to find all urls.
     *
     * @param {string} startingUrl - Webpage to crawl.
     * @param {CrawlOptions} options - Options for crawling process.
     * @Param {Viewport} viewport - Set the viewport of the webpages.
     * @param {LoadEvent | Array<LoadEvent>} waitUntil - Wait for dom events before starting the crawling process.
     * @returns List of decoded urls.
     */
    public crawl(
      startingUrl: string,
      options?: CrawlOptions,
      viewport?: Viewport,
      waitUntil?: LoadEvent | Array<LoadEvent>
    ): Promise<Array<string>>;

    /**
     * Checks possible input options and compiles the urls.
     * Possible input options are:
     * - url - single url;
     * - urls - multiple urls;
     * - filepath - path to file with urls;
     * - crawler - domain to crawl and gather urls.
     *
     * @param {QualwebOptions} options - QualWeb options.
     * @returns List of urls.
     */
    private checkUrls(options: QualwebOptions): Promise<Array<string>>;
  }

  /**
   * Reads a file to obtain the urls to evaluate.
   *
   * @param {string} file - Path to file of urls.
   * @returns List of decoded urls.
   */
  function getFileUrls(file: string): Promise<Array<string>>;

  export {
    LoadEvent,
    QualwebOptions,
    Execute,
    EvaluationReport,
    Evaluator,
    Url,
    Metadata,
    Modules,
    Module,
    State,
    Selector,
    PageOptions,
    Evaluations,
    PuppeteerPlugins,
    ClusterOptions,
    QualWeb,
    getFileUrls,
    generateEARLReport,
  };
}
