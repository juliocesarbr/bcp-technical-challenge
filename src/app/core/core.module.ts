import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [
    ],
    providers: [

    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {

    }
}
