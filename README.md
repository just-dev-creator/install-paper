# Download PaperMC action

This action downloads the specified PaperMC version and build.

## Be adviced
PaperMC **does not** recommend blindly downloading the latest version and the
latest build. While you can do this using this action, we **do not recommend**
this. Please specify an **exact** version and build number, and update them
regularly after you've tested that they're **working**.
## Inputs

### `version`
The version to download or latest to download the latest version.
Defaults to "latest".

### `build_number`
The build to download or latest to download the latest build.
Defaults to "latest".

### `path`
**Required** Where to save the downloaded build.

## Example usage

```yml
uses: just-dev-creator/install-paper
with:
    version: '1.17.1'
    build_number: 'latest'
    path: './paperclip.jar'
```
