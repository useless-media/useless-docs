# SingletonStoreController

> `const` **SingletonStoreController**: `object`

//
//  TestState.ts
//
//  Created by Lars Rothaus on 14/03/2023.
//  Copyright © 14/03/2023 Lars Rothaus. All rights reserved.
//

import { SingletonDecorator, SingletonStoreController, Singleton } from '@useless-media/useless-sdk'

export class ATest extends Singleton {

  public value: string = "initValue";

  // constructor() {
  //   super();
  //   this.value = 'init-value';
  // }

}

SingletonDecorator<ATest>(ATest, '12345-12345');

//@ts-ignore
window.controller = SingletonStoreController;

## Type Declaration

### Reset()

> **Reset**: () => `void`

#### Returns

`void`
