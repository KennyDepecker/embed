import { loadOptionsFromAttributes } from '../utils'

export const buildOptionsFromAttributes = (element: HTMLElement) => {
  return loadOptionsFromAttributes(element, {
    source: 'string',
    medium: 'string',
    mediumVersion: 'string',
    open: 'string',
    openValue: 'integer',
    hideFooter: 'boolean',
    hideHeaders: 'boolean',
    opacity: 'integer',
    disableTracking: 'boolean',
    onReady: 'function',
    onSubmit: 'function',
    onQuestionChanged: 'function',
    onHeightChanged: 'function',
    autoResize: 'stringOrBoolean',
    onClose: 'function',
    onEndingButtonClick: 'function',
    transitiveSearchParams: 'array',
    hidden: 'record',
    chat: 'boolean',
    buttonColor: 'string',
    customIcon: 'string',
    width: 'integer',
    height: 'integer',
    size: 'integer',
    buttonText: 'string',
    position: 'string',
    enableSandbox: 'boolean',
    tooltip: 'string',
    notificationDays: 'integer',
    autoClose: 'integerOrBoolean',
    shareGaInstance: 'stringOrBoolean',
    forceTouch: 'boolean',
    enableFullscreen: 'boolean',
    inlineOnMobile: 'boolean',
    disableAutoFocus: 'boolean',
    tracking: 'record',
    redirectTarget: 'string',
    iframeProps: 'record',
    lazy: 'boolean',
    keepSession: 'boolean',
  })
}
