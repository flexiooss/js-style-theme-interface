import {globalFlexioImport} from '@flexio-oss/global-import-registry'


export const styleSheetMediaTablet = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('tablet')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('(min-width: 480px)'))
  .build()
