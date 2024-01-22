# Useless DeCaf
DeCaf is an alternative to Google’s Cast Application Framework better known as Caf.
It is built directly on the hardware eliminating all the bulky application code making it both significantly faster
as well as infinitely more versatile than Google's “one box fits all” Chromecast solution.
Decaf allows you to build exactly what you want, exactly how you want to do it.

## Overview
DeCaf consists of the `core` which takes care of all communication with the Chromecast firmware and `DeCaf` itself
which is a very thin application layer, essentially delegating all functionality to what we call a `DeCafClient` which
is the main integration point with the framework.

On its own DeCaf won't really do anything, except "open up a box" where you can put whatever you want essentially. It
can be anything from just a video element to a Shaka or an Hls.Js player or your own proprietary player.

On top of DeCaf there is also the [DeCaf SaaS Receiver Application](guides/DeCafSaaSReceiverApplication.md) as DeCaf and
its core is not currently available in the public domain. The SaaS receiver will start up the DeCaf framework and await
a custom (DeCaf configuration) message containing a url to a javascript file which it will import. This file is expected
to export a class or an ES5 function with the name `Client` or `DeCafClient` (it will not work with an arrow-function as
DeCaf will use the `new` operator to instantiate the `DeCafClient`).

For more on how you can (easily ;-) get started with your own client, check out the [Guides](guides/index.md). 

## Useless Emu-Later
Once you have a client up and running, the easiest way to start testing it is to use `Useless Emu-Later` which can run
Chromecast receiver applications both in its emulator as well as launching them to a real device on your network.
The `Useless Emu-Later` has a `DeCaf` mode where it will run the SaaS receiver in its emulator (and launch the real
SaaS receiver on your device when you want to test that), giving you the exact same way of working whether you're using
the emulator or a real device. the `Useless Emu-Later` can also take care of automatically sending the configuration
message with the `DeCafClient` url so all you need to do is supply the url to where you are serving your client build.

For more information on how the Emu-Later works, check out the [Useless Emu-Later Guide](guides/UselessEmuLater.md).