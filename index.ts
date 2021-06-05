export * from './src/zrender';
export * from './src/export';

import {registerPainter} from './src/zrender';
import CanvasPainter from './src/canvas/Painter';
import SVGPainter from './src/svg/Painter';

/**
 * 同时注册 canvas 和 svg 渲染器，这样你可以使用svg或者canvas渲染了
 */
registerPainter('canvas', CanvasPainter);
registerPainter('svg', SVGPainter);
// import './src/vml/vml';
