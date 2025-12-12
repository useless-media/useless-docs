# Useless Extendables

The `ExtendableFeature` is designed to organize code in a way that simplifies the addition and use of extensions or
augmentations to a project's core functionality. Paired with the `FeatureManager` for registration and management of
features and extensions, the `Extendables` framework seamlessly connects these components behind the scenes, allowing
both the core feature and its extensions to concentrate on their specific responsibilities.

For more advanced scenarios, the `LazyFeature` and the underlying `LoadableFeatureContainer` enable simplified
code-splitting, making it easier to break out parts of a project into lazy-/side-loadable components, while still
allowing you to interact with the feature as though it were available at compile time.