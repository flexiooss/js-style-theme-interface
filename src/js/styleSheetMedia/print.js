import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export const styleSheetMediaPrint = new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaBuilder()
  .name('print')
  .medias(
    new globalFlexioImport.io.flexio.extended_flex_types.StringArrayBuilder()
      .pushValue('print')
      .build()
  )
  .build()
