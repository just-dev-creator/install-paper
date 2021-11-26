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

## Further reading
### Caching
I **highly** recommend caching the Paperclip file because it's a quite large download. You can find more information on caching [here](https://docs.github.com/en/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)

### Accepting to the EULA
If you want to start a little test server, you will need to accept the minecraft EULA, f. ex. trough the following script:
```sh
echo "eula=true" > eula.txt
```

### What is the use case for this?
I don't know. I really liked the idea of actually starting a plugin before in testing, and therefore this probably will be just for personal use. If you wan't to see this action in action, just click [here](https://github.com/just-dev-creator/Challenge/actions/workflows/build_artifacts.yml).

### Why so complicated?
PaperMC stopped their V1 api and the option to download the latest version using just one api endpoint (which I learned the [hard way](https://github.com/just-dev-creator/Challenge/runs/4327407313)). I then found [this](https://github.com/just-dev-creator/install-paper/blob/v1.0.2/download.sh) little script and copied its functionality over to GH actions.
