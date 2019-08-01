# hello-cli

This makes dad jokes

## Installation
1. Clone this repo
2. Run `npm install` in the project root
3. Run `npm install -g .` to install this cli globally

## Usage

We have 2 commands: 

1. `hello`
2. `pkce-login`

### Random dad jokes
#### Example
```
$ hello -n robert
```

### Search dad jokes
#### Example
```
$ hello -n me -s orange
```
### Authenticate
Authenticates via OAuth 2.0 PKCE flow
#### Example
```
$ pkce-login
```


