module.exports = 
process.env.NODE_ENV === 'production' ?
{
    appid: 'wx27fc6eec9040199f',
    appsecret: 'b6d7a6c1b262f4dd10e244cab7d5a5b6',
    token: 'test',
    encodingAESKey: 'EnWTNZiEz0LmBG3fyuPiTnyQx3MNBMyTBkFl6JbHlW4',
    port: 3000,
}
:
{
    appid: 'wx27fc6eec9040199f',
    appsecret: 'b6d7a6c1b262f4dd10e244cab7d5a5b6',
    token: 'test',
    port: 3000,
}
;