# Application for create web page screenshots

## HOW TO

**POST** */*

Request

| Param | Definition | Required |
| ----- | ---------- | -------- |
| url   | Url for screenshot page | true |
| type  | pdf or jpg | true |
| filename | name for file if it is empty, then use url for these | false |

Response

Return file with page screenshot in pdf of jpeg

## Authorization

!!! Access module does not work in debug mode !!!

For production mode you should set environment variables

ACCESS_KEY_NAME = ***%your_access_key_name_header%***<br />
ACCESS_KEY_VALUE = ***%secret_access_key_value%***

#### For example:
ACCESS_KEY_NAME = X-Token<br />
ACCESS_KEY_VALUE = 1412dsscasdecazxc <br />

In this case you should make request with header X-Token=1412dsscasdecazxc
