/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';

import {ImageDemo} from './index_common';

@NgModule({imports: [WorkerAppModule], bootstrap: [ImageDemo], declarations: [ImageDemo]})
export class ExampleModule {
}

platformWorkerAppDynamic().bootstrapModule(ExampleModule);
