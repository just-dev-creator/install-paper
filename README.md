# Download PaperMC action

This action downloads the specified PaperMC version and build.

## Inputs

### `version`
The version to download or latest to download the latest version.
Defaults to "latest".

### `build_number`
The build to download or latest to download the latest build.
Defaults to "latest".

### `path`
**Required** Where to save the downloaded build. 

## Example suage

```yml
uses: just-dev-creator/install-paper
with:
    version: '1.17.1'
    build_number: 'latest'
    path: './paperclip.jar'