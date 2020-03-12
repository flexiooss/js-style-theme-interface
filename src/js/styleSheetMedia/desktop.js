import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export const styleSheetMediaDesktop = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('desktop')
  .medias(new globalFlexioImport.io.flexio.flex_types.arrays.StringArray('(min-width: 1100px)'))
  .build()
