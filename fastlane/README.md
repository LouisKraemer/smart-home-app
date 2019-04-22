fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
### check_git_status
```
fastlane check_git_status
```

### set_build_numbers_to_current_timestamp
```
fastlane set_build_numbers_to_current_timestamp
```

### set_js_env
```
fastlane set_js_env
```


----

## iOS
### ios restore_files
```
fastlane ios restore_files
```

### ios setup
```
fastlane ios setup
```

### ios setup_push
```
fastlane ios setup_push
```

### ios build
```
fastlane ios build
```

### ios deploy_hockey
```
fastlane ios deploy_hockey
```

### ios upload_to_appcenter
```
fastlane ios upload_to_appcenter
```

### ios upload_to_testflight
```
fastlane ios upload_to_testflight
```

### ios deploy
```
fastlane ios deploy
```

### ios deploy_local
```
fastlane ios deploy_local
```

### ios add_devices
```
fastlane ios add_devices
```


----

## Android
### android restore_files
```
fastlane android restore_files
```

### android set_keys
```
fastlane android set_keys
```

### android build
```
fastlane android build
```

### android deploy_hockey
```
fastlane android deploy_hockey
```

### android upload_to_appcenter
```
fastlane android upload_to_appcenter
```

### android upload_to_playstore
```
fastlane android upload_to_playstore
```

### android deploy
```
fastlane android deploy
```

### android deploy_local
```
fastlane android deploy_local
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
