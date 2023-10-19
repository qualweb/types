# Changelog

## [0.7.23] - 19/10/2023

### Updated

- Added prohibitedAria

## [0.7.21] - 01/02/2023

### Updated

- Pupeteer types

## [0.7.20] - 26/05/2022

### Updated

- Pupeteer types

## [0.7.19] - 26/05/2022

### Updated

- Updated core

## [0.7.18] - 12/05/2022

### Updated

- Updated earl

## [0.7.17] - 03/03/2022

### Updated

- updated util

## [0.7.16] - 03/12/2021

### Added

- Swedish lang to locale interface

## [0.7.15] - 21/10/2021

### Updated

- core and crawler interfaces

## [0.7.14] - 21/10/2021

### Added

- LoadEvent as an export type in core module

## [0.7.13] - 29/09/2021

### Added

- "url_tr" to the SuccessCriteria interface from act-rules module

## [0.7.12] - 29/09/2021

### Added

- Finnish lang to locale interface

## [0.7.11] - 09/08/2021

### Added

- logging options to core interface

## [0.7.10] - 28/07/2021

### Changed

- qualweb options translation value from type string to Lang

### [0.7.9] - 28/07/2021

### Changes

- full localization support added

## [0.7.8-alpha] - 27/07/2021

### Changes

- locale changes

## [0.7.7-alpha] - 23/07/2021

### Changes

- merged changes from develop

## [0.6.13] - 22/07/2021

### Added

- getElementOwnText function to qw-element interface

## [0.6.12] - 21/07/2021

### Changes

- downgraded @types/puppeteer to 5.4.3

## [0.6.11] - 19/07/2021

### Updated

- qwElement interface

## [0.6.10] - 19/07/2021

### Updated

- act-rules interface
- evaluation interface
- qwElement interface
- dependencies

## [0.6.9] - 30/06/2021

### Updated

- dom interface

## [0.6.8] - 21/06/2021

### Updated

- evaluation global interface

## [0.6.7] - 31/05/2021

### Updated

- core options interface

## [0.6.6] - 25/05/2021

### Updated

- util interface

### [0.7.6-alpha] - 11/05/2021

### Updated

- bugs fixed from develop branch

### [0.7.5-alpha] - 05/05/2021

### Updated

- locale interface
- act-rules interface
- wcag-techniques interface
- best-practices interface

### [0.7.4-alpha] - 05/05/2021

### Updated

- locale interface

### [0.7.3-alpha] - 04/05/2021

### Updated

- locale interface

### [0.7.2-alpha] - 04/05/2021

### Updated

- locale

### [0.7.1-alpha] - 04/05/2021

### Updated

- locale, core and act-rules interfaces

## [0.6.3] - 03/05/2021

### Updated

- qwElement interface changes

## [0.6.2-alpha] - 22/04/2021

### Updated

- core interface

## [0.6.1-alpha] - 21/04/2021

### Updated

- core interface

## [0.6.0-alpha] - 21/04/2021

### Updated

- core interface

## [0.5.19] - 21/04/2021

### Updated

- qwPage interface
- crawler interface
- core interface

## [0.5.18] - 15/04/2021

### Updated

- qwPage interface
- util interface

## [0.5.17] - 15/04/2021

### Updated

- core interface
- util interface

## [0.5.16] - 15/04/2021

### Updated

- dom interface

## [0.5.15] - 14/04/2021

### Updated

- qwPage interface

## [0.5.14] - 14/04/2021

### Updated

- evaluation interface
- util interface

## [0.5.13] - 13/04/2021

### Updated

- crawler interface
- evaluation interface
- core documentation

## [0.5.12] - 09/04/2021

### Updated

- QualwebOptions to support CrawlOptions

## [0.5.11] - 09/04/2021

### Updated

- crawler interface

## [0.5.10] - 01/04/2020

### Updated

- crawler interface

## [0.5.9] - 30/03/2021

### Added

- Level and Principle types

## [0.5.8] - 30/03/2021

### Updated

- act-rules interface

## [0.5.7] - 29/03/2021

### Updated

- several interfaces

## [0.5.6] - 27/03/2021

### Added

- necessary types for object Window on the evaluation module

## [0.5.5] - 27/03/2021

### Changes

- several interfaces fixes

## [0.5.4] - 26/03/2021

### Added

- declaration for module wappalyzer

## [0.5.3] - 25/03/2021

### Updated

- qw-element styles interface

## [0.5.2] - 25/03/2021

### Updated

- qw-element styles interface

## [0.5.1] - 24/03/2021

### Updated

- qw-element styles interface

## [0.5.0] - 24/03/2021

### Updated

- qw-element styles interface
- dom interfaces
- evaluation interfaces
- act-rules interfaces

### Removed

- unused dependencies

## [0.4.68] - 23/03/2021

### Updated

- qw-element styles interface

## [0.4.67] - 23/03/2021

### Updated

- earl-reporter interfaces

## [0.4.66] - 23/03/2021

### Updated

- core interface

## [0.4.65] - 22/03/2021

### Updated

- core interface

## [0.4.64] - 22/03/2021

### Updated

- return values for earl-reporter module functions

## [0.4.63] - 22/03/2021

### Added

- new interfaces for the CSS rules on qw-element module:
  - CSSProperties
  - MediaProperty
  - PseudoSelectorProperty
  - CSSProperty

### Updated

- ACTElement interface
- BestPracticeResult interface. It now supports multiple elements of type BPElement

## [0.4.62] - 11/03/2021

### Added

- timeout to QualwebOptions interface
  - you can now set a timeout duration for loading pages
- waitUntil to QualwebOptions interface
  - you can now choose what events should puppeteer wait before starting the evaluation

## [0.4.61] - 09/03/2021

### Updated

- qwElement.d.ts

## [0.4.60] - 08/03/2021

### Updated

- core.d.ts

## [0.4.59] - 01/03/2021

### Updated

- evaluation.d.ts

## [0.4.58] - 27/02/2021

### Fixed

- bugs on evaluation.d.ts

## [0.4.57] - 26/02/2021

### Updated

- wcag-techniques.d.ts

## [0.4.56] - 26/02/2021

### Added

- counter.d.ts for counter module
- "exclude" option for ACTROptions, WCAGOptions and BPOptions
- "Execute" interface for core.d.ts

## [0.4.55] - 23/02/2021

### Updated

- qw-element definition

## [0.4.54] - 18/02/2021

### Added

- counter module definition types

## [0.4.52] - 16/12/2020

### Changed

- updated earl-reporter module

## [0.4.50] - 12/12/2020

### Changed

- added getOwnedElements

## [0.4.49] - 12/11/2020

### Changed

- util.d.ts interface

## [0.4.48] - 12/11/2020

### Changed

- dom.d.ts interface

## [0.4.47] - 11/11/2020

### Changed

- dom.d.ts interface

## [0.4.46] - 11/11/2020

### Changed

- dom.d.ts interface

### Updated

- dependencies

## [0.4.45] - 02/11/2020

### Updated

- adapting core to wcag tecniques

## [0.4.44] - 30/10/2020

### Updated

- changed reports

## [0.4.43] - 30/10/2020

### Updated

- wcag module

## [0.4.42] - 21/10/2020

### Updated

- core options

## [0.4.41] - 21/10/2020

### Updated

- qwElement types

## [0.4.40] - 08/10/2020

### Updated

- core types

## [0.4.39] - 29/09/2020

### Updated

- updated util

## [0.4.38] - 29/09/2020

### Updated

- updated wcag techniques

## [0.4.37] - 22/09/2020

### Updated

- util module types

## [0.4.36] - 22/09/2020

### Updated

- util module types

## [0.4.35] - 17/09/2020

### Updated

- util module types

## [0.4.34] - 07/09/2020

### Updated

- dom module types

## [0.4.33] - 03/09/2020

### Fixed

- Added validator argument to evaluation

## [0.4.32] - 03/09/2020

### Fixed

- Added validator to dom

## [0.4.31] - 31/08/2020

### Fixed

- Missing return-type annotations in qwPage and util

## [0.4.30] - 26/08/2020

### Added

- deleted isElementPresention

## [0.4.29] - 10/08/2020

### Added

- deleted getTreeSelector

## [0.4.28] - 10/08/2020

### Added

- new shadowDOM and iframe support

## [0.4.27] - 06/08/2020

### Added

- wcag-techniques definition types

## [0.4.26] - 27/07/2020

### Updated

- qw-element interface

## [0.4.25] - 27/07/2020

### Updated

- core interface

## [0.4.24] - 22/07/2020

### Updated

- merged

## [0.4.23] - 10/07/2020

### Updated

- merged

## [0.4.22] - 10/07/2020

### Updated

- qwElement interface

## [0.4.21] - 08/07/2020

### Updated

- changed util methods

## [0.4.19] - 06/07/2020

### Updated

- interfaces that rely on stylesheets

## [0.4.18] - 03/07/2020

### Updated

- added cache to qwpage

## [0.4.17] - 03/07/2020

### Updated

- core and evaluation interfaces

## [0.4.16] - 03/07/2020

### Added

- html-validator interface

## [0.4.15] - 03/07/2020

### Updated

- core interface

## [0.4.14] - 03/07/2020

### Updated

- dom and core interfaces

## [0.4.13] - 02/07/2020

### Updated

- dependencies
- css-techniques interface

## [0.4.12] - 22/06/2020

### Updated

- added method to QWElement

## [0.4.11] - 04/06/2020

### Updated

- added method AccessibilityUtils

## [0.4.10] - 29/05/2020

### Updated

- fixed evaluation report naming

## [0.4.9] - 29/05/2020

### Updated

- fixed evaluation report naming

## [0.4.8] - 29/05/2020

### Updated

- fixed imports

## [0.4.7] - 29/05/2020

### Updated

- added dom and evaluation

## [0.4.7] - 02/07/2020

### Updated

- css-techniques interface
- dependencies

## [0.4.6] - 28/05/2020

### Updated

- qwPage interface
- qwElement interface
- dependencies

## [0.4.5] - 27/05/2020

### Added

- qwPage interface
- qwElement interface

## [0.3.31] - 11/05/2020

### Added

- resultCode to CSSTechniqueResult interface

### Removed

- accessibility-tree.d.ts
- get-dom-puppeteer.d.ts

## [0.3.30] - 06/05/2020

### Added

- html option as input method to core options

## [0.3.29] - 06/05/2020

### Added

- LaunchOptions options to th start() function from core module

## [0.3.28] - 05/05/2020

### Added

- accessibleName attribute to HTMLTechniqueResult and ACTRuleResult

### Updated

- evaluation modules - normalized rules/techniques/bestPractices to assertions

## [0.3.27] - 22/04/2020

### Updated

- core module functions

## [0.3.26] - 03/04/2020

### Updated

- earl-report context

## [0.3.25] - 03/04/2020

### Updated

- earl-report context

## [0.3.24] - 02/04/2020

### Added

- htmlValidatorEndpoint option to html-techniques module options interface

### Removed

- htmlValidatorEndpoint option to act-rules module options interface

## [0.3.23] - 02/04/2020

### Added

- htmlValidatorEndpoint option to act-rules module options interface

## [0.3.22] - 18/03/2020

### Updated

- util module interfaces

## [0.3.21] - 18/03/2020

### Updated

- util module interfaces

## [0.3.20] - 17/03/2020

### Updated

- html-techniques module interfaces

## [0.3.19] - 17/03/2020

### Fixed

- some bugs

## [0.3.18] - 05/02/2020

### Updated

- dependencies

## [0.3.17] - 05/02/2020

### Deleted

- accessibility-tree.d.ts

## [0.3.16] - 05/02/2020

### Changed

- DomElement to Node

## [0.3.15] - 29/01/2020

### Updated

- util module

## [0.3.14] - 29/01/2020

### Updated

- util module

## [0.3.13] - 29/01/2020

### Updated

- util module

## [0.3.12] - 29/01/2020

### Updated

- util module

## [0.3.11] - 29/01/2020

### Updated

- util module

## [0.3.10] - 29/01/2020

### Updated

- util module

## [0.3.9] - 29/01/2020

### Updated

- util module

## [0.3.8] - 29/01/2020

### Updated

- util module

## [0.3.7] - 29/01/2020

### Added

- class Optimization to util module

## [0.3.6] - 22/01/2020

### Fixed

- a bug in the ACTRRuleMetadata interface

## [0.3.5] - 22/01/2020

### Updated

- ACTRRuleMetadata interface

## [0.3.4] - 22/01/2020

### Updated

- ACTROptions interface

## [0.3.3] - 21/01/2020

### Updated

- earl-reporter module interfaces

## [0.3.2] - 20/01/2020

### Changed

- earl-reporter module interfaces

## [0.3.1] - 17/01/2020

### Fixed

- some bugs

## [0.3.0] - 17/01/2020

### Changed

- act-rules module
- css-techniques module
- best-practices module
- earl-reporter module

## [0.2.16] - 15/01/2020

### Changed

- core module

## [0.2.15] - 15/01/2020

### Changed

- earl-reporter module

## [0.2.14] - 07/01/2020

### Changed

- act-rules module

## [0.2.13] - 07/01/2020

### Changed

- act-rules module

## [0.2.12] - 07/01/2020

### Changed

- act-rules module

## [0.2.11] - 07/01/2020

### Changed

- act-rules module

## [0.2.10] - 18/12/2019

### Changed

- EvaluationReport interface

## [0.2.9] - 18/12/2019

### Changed

- DomOptions interface to PageOptions

## [0.2.8] - 16/12/2019

### Changed

- css-practices interface

## [0.2.7] - 11/12/2019

### Changed

- best-practices interface

## [0.2.6] - 02/12/2019

### Changed

- stylesheets interface

## [0.2.5] - 02/12/2019

### Fixed

- interfaces bugs

## [0.2.4] - 02/12/2019

### Fixed

- dependencies bugs

## [0.2.3] - 29/11/2019

### Changed

- WappalyzerReport interface from wappalyzer module

## [0.2.2] - 29/11/2019

### Changed

- interface Dom from core module

## [0.2.1] - 29/11/2019

### Fixed

- some bugs

## [0.2.0] - 29/11/2019

### Changed

- interfaces from get-dom-puppeteer to core module

### Deleted

- get-dom-puppeteer module

## [0.1.13] - 29/11/2019

### Fixed

- a bug in the BPOptions interface to best-practices module

## [0.1.12] - 29/11/2019

### Added

- BPOptions interface to best-practices module

## [0.1.11] - 27/11/2019

### Added

- maxParallelEvaluations option to QualwebOptions interface from core module

## [0.1.10] - 21/11/2019

### Changed

- act-rules module interface

## [0.1.9] - 18/10/2019

### Changed

- target options for html-techniques module
- target options for css-techniques module
- target options for act-rules module
- target options for best-practices module

## [0.1.8] - 17/10/2019

### Changed

- best-practices module interface
- act-rules module interface

## [0.1.7] - 16/10/2019

### Changed

- best-practices module interface

## [0.1.6] - 16/10/2019

### Changed

- best-practices module interface

## [0.1.5] - 14/10/2019

### Changed

- get-dom-puppeteer module interface

## [0.1.4] - 14/10/2019

### Changed

- core module options interface

## [0.1.2] - 11/10/2019

### Changed

- html techniques and act rules modules interfaces

## [0.1.1] - 11/10/2019

### Changed

- act-rules module interface

## [0.1.0] - 11/10/2019

### Changed

- act-rules module interface

## [0.0.28] - 07/10/2019

### Added

- util module interface

## [0.0.27] - 07/10/2019

### Changed

- @qualweb/earl-reporter module changes
- @qualweb/core module changes

## [0.0.26] - 07/10/2019

### Changed

- EarlOptions interface on module @qualweb/earl-reporter

## [0.0.25] - 02/10/2019

### Added

- Metadata interface in exports on the core module
- crawler module

## [0.0.24] - 17/09/2019

### Added

- best-practices report type to earl-reporter report interface
- best-practices module to core evaluation interface

## [0.0.23] - 16/09/2019

### Fixed

- css-techniques minor interface changes

## [0.0.22] - 13/09/2019

### Fixed

- css-techniques minor interface changes

## [0.0.21] - 13/09/2019

### Fixed

- css-techniques minor interface changes

## [0.0.10] - 13/09/2019

### Changed

- css-techniques CSSTechniqueResult interface changes

## [0.0.9] - 13/09/2019

### Fixed

- stylesheet interface minor changes

## [0.0.8] - 13/09/2019

### Added

- stylesheet interface to get-dom-puppeteer module

## [0.0.7] - 11/09/2019

### Fixed

- best-practices module types - minor interface changes

## [0.0.6] - 11/09/2019

### Fixed

- best-practices module types - minor interface changes

## [0.0.5] - 10/09/2019

### Fixed

- best-practices module types - minor interface changes

## [0.0.4] - 10/09/2019

### Added

- best-practices module types - best-practices.d.ts

## [0.0.33] - 13/08/2019

### Changed

- some fields to be optional on the AccessibleElement interface on file accessibility-tree.d.ts

### Removed

- containsIds field from the AccessibilityTreeOptions interface on file accessibility-tree.d.ts

## [0.0.32] - 08/08/2019

### Added

- url field to success-criteria structure from interface ACTRuleMetadata on file act-rules.d.ts
- resultCode field to interface ACTRuleResult on file act-rules.d.ts
- url field to success-criteria structure from interface HTMLTechniqueMetadata on file html-techniques.d.ts
- url field to success-criteria structure from interface CSSTechniqueMetadata on file css-techniques.d.ts

## [0.0.31] - 02/08/2019

### Changed

- interfaces Dom and Html on file get-dom-puppeteer.d.ts

## [0.0.3] - 01/08/2019

### Added

- interface ACTMetadata on file act-rules.d.ts
- interface HTMLMetadata on file html-techniques.d.ts
- interface CSSMetadata on file css-techniques.d.ts

### Changed

- interface ACTResult to ACTRuleResult on file act-rules.d.ts
- interface ACTMetadata to ACTRuleMetadata on file act-rules.d.ts
- interface HTMLResult to HTMLTechniqueResult on file html-techniques.d.ts
- interface HTMLMetadata to HTMLTechniqueMetadata on file html-techniques.d.ts
- interface CSSResult to CSSTechniqueResult on file css-techniques.d.ts
- interface CSSMetadata to CSSTechniqueMetadata on file css-techniques.d.ts
