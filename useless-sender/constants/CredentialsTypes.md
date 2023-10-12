<div class="useless-tab-container">

- TypeScript

  ```ts
  enum CredentialsTypes {
    Basic = 'CredentialsTypes.Basic',
    Token = 'CredentialsTypes.Token'
  }
  ```

- Kotlin

  ```kotlin
  enum class CredentialsTypes(override val type: String): TypeEnum {
    Basic("CredentialsTypes.Basic"),
    Token("CredentialsTypes.Token");
  }
  ```

</div>