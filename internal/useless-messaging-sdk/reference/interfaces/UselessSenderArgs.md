# UselessSenderArgs<TSenderInformation>

## Extended by

- [`UselessConnectionSenderArgs`](reference/interfaces/UselessConnectionSenderArgs.md)

## Type Parameters

### TSenderInformation

`TSenderInformation` *extends* [`SenderInformation`](reference/interfaces/SenderInformation.md) = [`SenderInformation`](SenderInformation.md)

## Properties

### configuration?

> **configuration**?: `Partial`<[`UselessSenderConfiguration`](reference/interfaces/UselessSenderConfiguration.md)>

***

### sendAnyMessage?

> **sendAnyMessage**?: [`IAnyMessageMessagingSendMessage`](IAnyMessageMessagingSendMessage.md)<`string` | `AnyMessage` | [`UselessMessage`](reference/classes/UselessMessage.md)>

***

### senderInformation?

> **senderInformation**?: `Partial`<`TSenderInformation`>

***

### sendMessage?

> **sendMessage**?: [`IMessagingSendMessage`](IMessagingSendMessage.md)<[`UselessMessage`](reference/classes/UselessMessage.md)>
