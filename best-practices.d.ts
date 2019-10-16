declare module '@qualweb/best-practices' {
  import { DomElement } from 'htmlparser2';

  interface BestPracticeMetadata {
    target: {
      'parent-sibling'?: string;
      parent?: string;
      element?: string | string[];
      attributes?: string | string[];
      css?: string | string[];
    };
    'success-criteria'?: {
      name: string;
      level: string;
      principle: string;
      url: string;
    }[];
    related?: string[];
    url?: string;
    passed: number;
    warning: number;
    failed: number;
    inapplicable: number;
    type?: string[];
    a11yReq?: string[];
    outcome: 'passed' | 'failed' | 'warning' | 'inapplicable' | '';
    description: string;
  }

  interface BestPracticeResult {
    verdict: 'passed' | 'failed' | 'warning' | 'inapplicable' | '';
    description: string[] | string | '';
    resultCode: string[] | string;
    pointer?: string;
    htmlCode?: string | string[];
    attributes?: string | string[];
  }

  interface BestPracticesGlobalMetadata {
    passed: number;
    warning: number;
    failed: number;
    inapplicable: number;
  }

  interface BestPractice {
    name: string;
    code: string;
    mapping?: string;
    description: string;
    metadata: BestPracticeMetadata;
    results: BestPracticeResult[];
  }

  interface BestPracticesReport {
    type: 'best-practices';
    metadata: BestPracticesGlobalMetadata;
    'best-practices': {
      [bestPractice: string]: BestPractice;
    };
  }

  function executeBestPractices(sourceHTML: DomElement[], processedHTML: DomElement[]): Promise<BestPracticesReport>;

  export {
    BestPracticeMetadata,
    BestPracticeResult,
    BestPracticesGlobalMetadata,
    BestPractice,
    BestPracticesReport,
    executeBestPractices
  };
}