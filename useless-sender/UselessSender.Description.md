The main entry point of the library. This is intended to be constructed once and then have that instance follow the
lifecycle of the app. When the app enters background and foreground it should notify the UselessSender through its
`enteringBackground` and `enteringForeground` functions and the sender will then in turn inform the rest of the library
to deallocate/allocate resources.

It is through the sender that a connection to a Receiver Device is established. Once a connection has been established
the main point of contact will be the UselessSession provided through the sender's delegate `sessionStarted`.